import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  isAssistantModalOpen = false;
  isAssistantLoading = false;
  isAssistantVisible = true;

  openAssistantModal(): void {
    this.isAssistantModalOpen = true;
    this.isAssistantLoading = true;
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }

  closeAssistantModal(): void {
    this.isAssistantModalOpen = false;
    this.isAssistantLoading = false;
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }

  ngOnInit(): void {
    // Inicializar la visibilidad del asistente
    this.checkAssistantVisibility();
  }

  ngOnDestroy(): void {
    // Cleanup si es necesario
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkAssistantVisibility();
  }

  private checkAssistantVisibility(): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // El asistente se oculta cuando el usuario ha hecho scroll más del 120% de la altura de la ventana
    // Esto significa que está saliendo de la sección home
    this.isAssistantVisible = scrollY < windowHeight * 1.2;
  }

  onIframeLoad(): void {
    // Simular un pequeño delay para mejor UX
    setTimeout(() => {
      this.isAssistantLoading = false;
    }, 1000);
  }
}
