import { Pipe, PipeTransform, inject, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'safeTranslate',
  standalone: true,
  pure: false // Para que se actualice cuando cambie el idioma
})
export class SafeTranslatePipe implements PipeTransform, OnDestroy {
  private translateService = inject(TranslateService);
  private languageService = inject(LanguageService);
  private sanitizer = inject(DomSanitizer);
  
  private subscription?: Subscription;
  private lastKey = '';
  private lastValue = '';
  private lastLang = '';

  constructor() {
    // Suscribirse a cambios de idioma para forzar actualización
    this.subscription = this.languageService.language$.subscribe(() => {
      this.lastLang = this.languageService.getLanguageCode();
    });
  }

  transform(key: string, params?: any, sanitize: boolean = false): string | SafeHtml {
    if (!key) return '';

    const currentLang = this.languageService.getLanguageCode();
    
    // Optimización: solo traducir si cambió la clave, parámetros o idioma
    if (key === this.lastKey && currentLang === this.lastLang) {
      return sanitize ? this.sanitizer.bypassSecurityTrustHtml(this.lastValue) : this.lastValue;
    }

    const translation = this.translateService.instant(key, params);
    
    // Verificar si la traducción existe
    if (translation === key && !this.languageService.hasTranslation(key)) {
      console.warn(`Traducción no encontrada para la clave: ${key}`);
    }

    this.lastKey = key;
    this.lastValue = translation;
    this.lastLang = currentLang;

    return sanitize ? this.sanitizer.bypassSecurityTrustHtml(translation) : translation;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 