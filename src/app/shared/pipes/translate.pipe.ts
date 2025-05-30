import { Pipe, PipeTransform, inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/services/translation.service';
import { LanguageService } from '../../core/services/language.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Para que se actualice cuando cambie el idioma
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private translationService = inject(TranslationService);
  private languageService = inject(LanguageService);
  private cdr = inject(ChangeDetectorRef);
  
  private subscription?: Subscription;
  private lastKey = '';
  private lastParams: any = null;
  private lastValue = '';
  private currentLang = '';

  constructor() {
    // Suscribirse a cambios de idioma para forzar actualización
    this.subscription = this.languageService.language$.subscribe(() => {
      this.currentLang = this.languageService.getLanguageCode();
      // Limpiar cache para forzar nueva traducción
      this.lastKey = '';
      this.lastParams = null;
      this.lastValue = '';
    });
  }

  transform(key: string, params?: { [key: string]: string | number }): string {
    const currentLang = this.languageService.getLanguageCode();
    const paramsChanged = JSON.stringify(params) !== JSON.stringify(this.lastParams);
    const langChanged = currentLang !== this.currentLang;
    
    // Verificar si necesita actualización
    if (key !== this.lastKey || paramsChanged || langChanged) {
      this.lastKey = key;
      this.lastParams = params;
      this.currentLang = currentLang;
      this.lastValue = this.translationService.translate(key, params);
    }
    
    return this.lastValue;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 