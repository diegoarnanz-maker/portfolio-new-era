import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  isAssistantModalOpen = false;
  isAssistantLoading = false;
  isAssistantVisible = true;
  showAssistantMessage = false;

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
    this.checkAssistantVisibility();
    this.startAssistantMessageAnimation();
  }

  private startAssistantMessageAnimation(): void {
    setTimeout(() => {
      this.showAssistantMessage = true;
      
      setTimeout(() => {
        this.showAssistantMessage = false;
      }, 6000);
    }, 2000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkAssistantVisibility();
  }

  private checkAssistantVisibility(): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // El asistente se oculta cuando el usuario ha hecho scroll más del 120% de la altura de la ventana
    this.isAssistantVisible = scrollY < windowHeight * 1.2;
  }

  onIframeLoad(): void {
    setTimeout(() => {
      this.isAssistantLoading = false;
    }, 1000);
  }
}
