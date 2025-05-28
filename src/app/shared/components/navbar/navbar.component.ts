import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private themeService = inject(ThemeService);
  isDark = false;

  ngOnInit(): void {
    // Obtener el estado inicial del servicio
    this.isDark = this.themeService.isDark();
    console.log('🎨 Navbar - Estado inicial del tema:', this.isDark ? 'oscuro' : 'claro');
    
    // Suscribirse a los cambios del tema
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
      console.log('🎨 Navbar - Cambio de tema detectado:', isDark ? 'oscuro' : 'claro');
      console.log('🎨 Navbar - isDark actualizado a:', this.isDark);
    });

    // Debug inicial
    setTimeout(() => {
      this.debugTheme();
    }, 100);
  }

  toggleTheme(): void {
    console.log('🎨 Navbar - Toggle clicked, estado actual:', this.isDark ? 'oscuro' : 'claro');
    this.themeService.toggleTheme();
    
    // Debug después del toggle
    setTimeout(() => {
      this.debugTheme();
    }, 100);
  }

  debugTheme(): void {
    console.log('🔍 NAVBAR DEBUG:');
    console.log('- Navbar isDark:', this.isDark);
    console.log('- Servicio isDark():', this.themeService.isDark());
    this.themeService.debugTheme();
  }
}
