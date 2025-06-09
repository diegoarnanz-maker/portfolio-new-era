import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LanguageService, SupportedLanguage } from '../services/language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  private languageService = inject(LanguageService);
  private router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const langParam = route.params['lang'] as string;
    
    // Si no hay parámetro de idioma, permitir acceso
    if (!langParam) {
      return true;
    }

    // Verificar si el idioma es válido
    const isValidLang = this.languageService.availableLanguages
      .some(lang => lang.code === langParam);

    if (isValidLang) {
      // Establecer el idioma si es válido
      const language = this.languageService.getLanguageByCode(langParam);
      if (language) {
        this.languageService.setLanguage(language);
      }
      return true;
    } else {
      // Redirigir al idioma por defecto si no es válido
      const defaultLang = this.languageService.getCurrentLanguage().code;
      const newUrl = state.url.replace(`/${langParam}`, `/${defaultLang}`);
      this.router.navigateByUrl(newUrl);
      return false;
    }
  }
} 