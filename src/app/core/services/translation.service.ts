import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { LanguageService } from './language.service';
import { TRANSLATIONS, Translations } from '../i18n';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private languageService = inject(LanguageService);
  private translationsSubject = new BehaviorSubject<Translations>(TRANSLATIONS);

  private translations: Translations = TRANSLATIONS;

  constructor() {
    this.translationsSubject.next(this.translations);
    
    // Escuchar cambios de idioma
    this.languageService.language$.subscribe(() => {
      this.translationsSubject.next(this.translations);
    });
  }

  translate(key: string, params?: { [key: string]: string | number }): string {
    const currentLang = this.languageService.getLanguageCode();
    let translation = this.translations[currentLang]?.[key] || key;
    
    // Interpolación de parámetros si se proporcionan
    if (params) {
      Object.keys(params).forEach((param, index) => {
        const placeholder = `{${index}}`;
        translation = translation.replace(placeholder, params[param].toString());
      });
    }
    
    return translation;
  }

  translate$(key: string, params?: { [key: string]: string | number }) {
    return this.languageService.language$.pipe(
      map(() => this.translate(key, params))
    );
  }

  getCurrentTranslations() {
    const currentLang = this.languageService.getLanguageCode();
    return this.translations[currentLang] || this.translations['es'];
  }

  // Método para agregar traducciones dinámicamente
  addTranslations(lang: string, translations: { [key: string]: string }) {
    if (!this.translations[lang]) {
      this.translations[lang] = {};
    }
    
    this.translations[lang] = {
      ...this.translations[lang],
      ...translations
    };
    
    this.translationsSubject.next(this.translations);
  }

  // Método para verificar si existe una traducción
  hasTranslation(key: string, lang?: string): boolean {
    const targetLang = lang || this.languageService.getLanguageCode();
    return !!this.translations[targetLang]?.[key];
  }

  // Método para obtener todas las claves de traducción
  getTranslationKeys(lang?: string): string[] {
    const targetLang = lang || this.languageService.getLanguageCode();
    return Object.keys(this.translations[targetLang] || {});
  }
} 