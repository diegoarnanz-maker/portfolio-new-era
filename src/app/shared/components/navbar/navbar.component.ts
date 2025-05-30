import { Component, OnInit, inject, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService, Language } from '../../../core/services/language.service';
import { TranslationService } from '../../../core/services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);
  private translationService = inject(TranslationService);
  
  private subscriptions = new Subscription();
  
  isDark = false;
  showLangs = false;
  currentLanguage!: Language;

  // Usar los idiomas disponibles del servicio
  get langs() {
    return this.languageService.availableLanguages;
  }

  // Obtener lista de idiomas con información de estado activo
  get languageOptions() {
    return this.langs.map(lang => ({
      ...lang,
      isActive: this.isLanguageActive(lang.code)
    }));
  }

  ngOnInit(): void {
    // Suscribirse a cambios de tema
    this.isDark = this.themeService.isDark();
    this.subscriptions.add(
      this.themeService.darkMode$.subscribe((isDark) => {
        this.isDark = isDark;
      })
    );

    // Suscribirse a cambios de idioma
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.subscriptions.add(
      this.languageService.language$.subscribe((language) => {
        this.currentLanguage = language;
        console.log('Idioma actualizado en navbar:', language.name);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      this.showLangs = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.showLangs = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  changeLang(code: string) {
    const selectedLanguage = this.languageService.availableLanguages.find(lang => lang.code === code);
    if (selectedLanguage) {
      this.languageService.setLanguage(selectedLanguage);
      console.log('Idioma cambiado a:', selectedLanguage.name);
    } else {
      console.warn('Idioma no encontrado:', code);
    }
    this.showLangs = false;
  }

  toggleLanguageDropdown(): void {
    this.showLangs = !this.showLangs;
  }

  // Método helper para obtener traducciones
  translate(key: string): string {
    return this.translationService.translate(key);
  }

  // Método para verificar si un idioma está activo
  isLanguageActive(code: string): boolean {
    return this.currentLanguage.code === code;
  }

  // Método trackBy para optimizar el *ngFor
  trackByLangCode(index: number, lang: any): string {
    return lang.code;
  }
}
