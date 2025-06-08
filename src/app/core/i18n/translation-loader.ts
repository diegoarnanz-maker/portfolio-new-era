import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { TRANSLATIONS } from './index';

export class TranslationLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(TRANSLATIONS[lang] || TRANSLATIONS['es']);
  }
}
