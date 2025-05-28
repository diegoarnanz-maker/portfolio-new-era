import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean;
  private darkModeSubject = new BehaviorSubject<boolean>(false);

  public darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Comprobar si el tema se guardó en localStorage
    const savedMode = localStorage.getItem('theme');
    this.isDarkMode = savedMode === 'dark';
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    this.darkModeSubject.next(this.isDarkMode);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    this.darkModeSubject.next(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  isDark(): boolean {
    return this.isDarkMode;
  }
}
