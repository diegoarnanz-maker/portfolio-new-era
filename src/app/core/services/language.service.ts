import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translateService = inject(TranslateService);
  private currentLanguage: Language;
  private languageSubject: BehaviorSubject<Language>;

  public readonly availableLanguages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  constructor() {
    this.currentLanguage = this.getInitialLanguage();
    this.languageSubject = new BehaviorSubject<Language>(this.currentLanguage);
    this.translateService.setDefaultLang('es');
    this.translateService.use(this.currentLanguage.code);
  }

  public get language$() {
    return this.languageSubject.asObservable();
  }

  private getInitialLanguage(): Language {
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
      const found = this.availableLanguages.find(lang => lang.code === savedLanguage);
      if (found) return found;
    }
    
    // Detectar idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    const found = this.availableLanguages.find(lang => lang.code === browserLang);
    
    return found || this.availableLanguages[0];
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;
    localStorage.setItem('language', language.code);
    this.languageSubject.next(this.currentLanguage);
    this.translateService.use(language.code);
  }

  getLanguageCode(): string {
    return this.currentLanguage.code;
  }
} 