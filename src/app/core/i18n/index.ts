import { ES_TRANSLATIONS } from './es';
import { EN_TRANSLATIONS } from './en';
import { CODE_TRANSLATIONS } from './code';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const TRANSLATIONS: Translations = {
  es: ES_TRANSLATIONS,
  en: EN_TRANSLATIONS,
  code: CODE_TRANSLATIONS
};

export { ES_TRANSLATIONS, EN_TRANSLATIONS, CODE_TRANSLATIONS }; 