import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName?: string;
}

export type SupportedLanguage = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translateService = inject(TranslateService);
  private currentLanguage: Language;
  private languageSubject: BehaviorSubject<Language>;

  public readonly availableLanguages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸', nativeName: 'Español' },
    { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' }
  ];

  private readonly STORAGE_KEY = 'portfolio_language';
  private readonly DEFAULT_LANGUAGE: SupportedLanguage = 'es';

  constructor() {
    this.currentLanguage = this.getInitialLanguage();
    this.languageSubject = new BehaviorSubject<Language>(this.currentLanguage);
    this.initializeTranslation();
  }

  public get language$(): Observable<Language> {
    return this.languageSubject.asObservable();
  }

  private initializeTranslation(): void {
    this.translateService.setDefaultLang(this.DEFAULT_LANGUAGE);
    this.translateService.use(this.currentLanguage.code);
  }

  private getInitialLanguage(): Language {
    try {
      // 1. Intentar obtener idioma guardado
      const savedLanguage = localStorage.getItem(this.STORAGE_KEY);
      if (savedLanguage && this.isValidLanguageCode(savedLanguage)) {
        const found = this.availableLanguages.find(lang => lang.code === savedLanguage);
        if (found) return found;
      }

      // 2. Detectar idioma del navegador
      const browserLang = this.getBrowserLanguage();
      if (browserLang && this.isValidLanguageCode(browserLang)) {
        const found = this.availableLanguages.find(lang => lang.code === browserLang);
        if (found) return found;
      }

      // 3. Fallback al idioma por defecto
      return this.getDefaultLanguage();
    } catch (error) {
      console.warn('Error al obtener idioma inicial:', error);
      return this.getDefaultLanguage();
    }
  }

  private getBrowserLanguage(): string {
    try {
      return navigator.language.split('-')[0].toLowerCase();
    } catch {
      return this.DEFAULT_LANGUAGE;
    }
  }

  private isValidLanguageCode(code: string): code is SupportedLanguage {
    return this.availableLanguages.some(lang => lang.code === code);
  }

  private getDefaultLanguage(): Language {
    return this.availableLanguages.find(lang => lang.code === this.DEFAULT_LANGUAGE)!;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  async setLanguage(language: Language): Promise<void> {
    try {
      if (!this.isValidLanguageCode(language.code)) {
        throw new Error(`Idioma no soportado: ${language.code}`);
      }

      this.currentLanguage = language;
      localStorage.setItem(this.STORAGE_KEY, language.code);
      this.languageSubject.next(this.currentLanguage);
      
      await this.translateService.use(language.code).toPromise();
      
      console.log(`Idioma cambiado a: ${language.name} (${language.code})`);
    } catch (error) {
      console.error('Error al cambiar idioma:', error);
      throw error;
    }
  }

  getLanguageCode(): SupportedLanguage {
    return this.currentLanguage.code as SupportedLanguage;
  }

  isCurrentLanguage(code: string): boolean {
    return this.currentLanguage.code === code;
  }

  getLanguageByCode(code: string): Language | undefined {
    return this.availableLanguages.find(lang => lang.code === code);
  }

  // Método para obtener traducciones de forma programática
  getTranslation(key: string, params?: any): string {
    return this.translateService.instant(key, params);
  }

  // Método para verificar si una clave de traducción existe
  hasTranslation(key: string): boolean {
    const translation = this.translateService.instant(key);
    return translation !== key;
  }
} 