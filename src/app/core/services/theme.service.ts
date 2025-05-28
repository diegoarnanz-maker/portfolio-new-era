import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean;
  private darkModeSubject: BehaviorSubject<boolean>;

  constructor() {
    // Inicializar el tema basado en preferencias guardadas o del sistema
    this.isDarkMode = this.getInitialTheme();
    this.darkModeSubject = new BehaviorSubject<boolean>(this.isDarkMode);
    
    // Aplicar el tema después de un pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      this.applyTheme();
    }, 0);
  }

  public get darkMode$() {
    return this.darkModeSubject.asObservable();
  }

  private getInitialTheme(): boolean {
    // 1. Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    console.log('🎨 Tema guardado en localStorage:', savedTheme);
    
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      console.log('🎨 Usando tema guardado:', isDark ? 'oscuro' : 'claro');
      return isDark;
    }
    
    // 2. Si no hay preferencia guardada, usar la preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('🎨 Usando preferencia del sistema: oscuro');
      return true;
    }
    
    // 3. Por defecto, usar tema claro para debugging
    console.log('🎨 Usando tema por defecto: claro');
    return false;
  }

  private applyTheme(): void {
    const htmlElement = document.documentElement;
    
    console.log('🎨 Aplicando tema:', this.isDarkMode ? 'oscuro' : 'claro');
    console.log('🎨 Elemento HTML encontrado:', !!htmlElement);
    
    // Limpiar clases existentes
    htmlElement.classList.remove('dark', 'light');
    
    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('🎨 Clase "dark" añadida');
    } else {
      htmlElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      console.log('🎨 Clase "light" añadida');
    }
    
    // Verificar que la clase se aplicó correctamente
    const hasClass = this.isDarkMode ? 
      htmlElement.classList.contains('dark') : 
      htmlElement.classList.contains('light');
    
    console.log('🎨 Verificación - Clase aplicada correctamente:', hasClass);
    console.log('🎨 Clases actuales del HTML:', Array.from(htmlElement.classList));
    
    // Emitir el cambio
    this.darkModeSubject.next(this.isDarkMode);
  }

  toggleTheme(): void {
    console.log('🎨 Toggle solicitado - Estado actual:', this.isDarkMode ? 'oscuro' : 'claro');
    this.isDarkMode = !this.isDarkMode;
    console.log('🎨 Nuevo estado:', this.isDarkMode ? 'oscuro' : 'claro');
    this.applyTheme();
  }

  isDark(): boolean {
    return this.isDarkMode;
  }

  setTheme(isDark: boolean): void {
    console.log('🎨 Estableciendo tema programáticamente:', isDark ? 'oscuro' : 'claro');
    this.isDarkMode = isDark;
    this.applyTheme();
  }

  // Método para debugging
  debugTheme(): void {
    const htmlElement = document.documentElement;
    console.log('🔍 DEBUG TEMA:');
    console.log('- Estado del servicio:', this.isDarkMode ? 'oscuro' : 'claro');
    console.log('- Clase dark presente:', htmlElement.classList.contains('dark'));
    console.log('- Clase light presente:', htmlElement.classList.contains('light'));
    console.log('- Todas las clases:', Array.from(htmlElement.classList));
    console.log('- localStorage theme:', localStorage.getItem('theme'));
  }
}
