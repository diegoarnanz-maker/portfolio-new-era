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

  constructor() {
    // Suscribirse a cambios de idioma para forzar actualización
    this.subscription = this.languageService.language$.subscribe(() => {
      // Forzar actualización cuando cambie el idioma
    });
  }

  transform(key: string, params?: any, sanitize: boolean = false): string | SafeHtml {
    if (!key) return '';

    const translation = this.translateService.instant(key, params);
    
    // Verificar si la traducción existe
    if (translation === key && !this.languageService.hasTranslation(key)) {
      console.warn(`Traducción no encontrada para la clave: ${key}`);
    }

    return sanitize ? this.sanitizer.bypassSecurityTrustHtml(translation) : translation;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 