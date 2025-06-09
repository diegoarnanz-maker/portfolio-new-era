import { Component, OnInit, inject, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService, Language } from '../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);
  
  private subscriptions = new Subscription();
  
  isDark = false;
  showLangs = false;
  isMobileMenuOpen = false;
  currentLanguage!: Language;

  get langs() {
    return this.languageService.availableLanguages;
  }

  get languageOptions() {
    return this.langs.map(lang => ({
      ...lang,
      isActive: this.isLanguageActive(lang.code)
    }));
  }

  ngOnInit(): void {
    this.isDark = this.themeService.isDark();
    this.subscriptions.add(
      this.themeService.darkMode$.subscribe((isDark) => {
        this.isDark = isDark;
      })
    );

    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.subscriptions.add(
      this.languageService.language$.subscribe((language) => {
        this.currentLanguage = language;
        
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
    // Cerrar menú móvil si se hace clic fuera
    if (!target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.showLangs = false;
    this.isMobileMenuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  async changeLang(code: string) {
    try {
      const selectedLanguage = this.languageService.getLanguageByCode(code);
      if (selectedLanguage) {
        await this.languageService.setLanguage(selectedLanguage);
      } else {
        console.warn('Idioma no encontrado:', code);
      }
    } catch (error) {
      console.error('Error al cambiar idioma:', error);
    } finally {
      this.showLangs = false;
    }
  }

  toggleLanguageDropdown(): void {
    this.showLangs = !this.showLangs;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  isLanguageActive(code: string): boolean {
    return this.currentLanguage.code === code;
  }

  trackByLang(index: number, lang: Language): string {
    return lang.code;
  }

}
