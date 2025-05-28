import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio-diego';
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    // Inicializar el servicio de tema
    console.log('App iniciada, tema actual:', this.themeService.isDark());
  }
}
