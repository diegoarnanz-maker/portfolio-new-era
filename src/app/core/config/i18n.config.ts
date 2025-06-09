import { InjectionToken } from '@angular/core';
import { Language, SupportedLanguage } from '../services/language.service';

export interface I18nConfig {
  defaultLanguage: SupportedLanguage;
  fallbackLanguage: SupportedLanguage;
  availableLanguages: Language[];
  storageKey: string;
  enableBrowserDetection: boolean;
  enableConsoleWarnings: boolean;
  dateFormats: Record<SupportedLanguage, string>;
  numberFormats: Record<SupportedLanguage, Intl.NumberFormatOptions>;
}

export const I18N_CONFIG = new InjectionToken<I18nConfig>('I18N_CONFIG');

export const DEFAULT_I18N_CONFIG: I18nConfig = {
  defaultLanguage: 'es',
  fallbackLanguage: 'es',
  availableLanguages: [
    { code: 'es', name: 'Español', flag: '🇪🇸', nativeName: 'Español' },
    { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' }
  ],
  storageKey: 'portfolio_language',
  enableBrowserDetection: true,
  enableConsoleWarnings: true,
  dateFormats: {
    es: 'dd/MM/yyyy',
    en: 'MM/dd/yyyy'
  },
  numberFormats: {
    es: {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    },
    en: {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }
  }
};

// Utilidades para formateo
export class I18nUtils {
  static formatDate(date: Date, language: SupportedLanguage, config: I18nConfig): string {
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    return new Intl.DateTimeFormat(locale).format(date);
  }

  static formatNumber(number: number, language: SupportedLanguage, config: I18nConfig): string {
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    const options = config.numberFormats[language];
    return new Intl.NumberFormat(locale, options).format(number);
  }

  static formatCurrency(amount: number, language: SupportedLanguage, currency: string = 'EUR'): string {
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
} 