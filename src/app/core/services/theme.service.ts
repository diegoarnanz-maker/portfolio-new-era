import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean;
  private darkModeSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isDarkMode = this.getInitialTheme();
    this.darkModeSubject = new BehaviorSubject<boolean>(this.isDarkMode);
    this.applyTheme();
  }

  public get darkMode$() {
    return this.darkModeSubject.asObservable();
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Comentado: detección automática de preferencias del sistema
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   return true;
    // }
    
    // Por defecto siempre tema oscuro para nuevos usuarios
    return true;
  }

  private applyTheme(): void {
    const htmlElement = document.documentElement;
    
    htmlElement.classList.remove('dark', 'light');
    
    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
    
    this.darkModeSubject.next(this.isDarkMode);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  isDark(): boolean {
    return this.isDarkMode;
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode = isDark;
    this.applyTheme();
  }
}
