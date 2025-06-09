import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './ai-assistant.component.html'
})
export class AiAssistantComponent implements OnInit, OnDestroy {
  isAssistantVisible = false;
  showAssistantMessage = false;
  isAssistantModalOpen = false;
  isAssistantLoading = true;

  private assistantTimer?: number;
  private messageTimer?: number;

  ngOnInit() {
    // Mostrar el asistente después de 3 segundos
    this.assistantTimer = window.setTimeout(() => {
      this.checkAssistantVisibility();
      
      // Mostrar el mensaje después de 1 segundo más
      this.messageTimer = window.setTimeout(() => {
        this.showAssistantMessage = true;
        
        // Ocultar el mensaje después de 5 segundos
        window.setTimeout(() => {
          this.showAssistantMessage = false;
        }, 5000);
      }, 1000);
    }, 3000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkAssistantVisibility();
  }

  private checkAssistantVisibility(): void {
    const aboutMeSection = document.getElementById('about-me');
    
    if (aboutMeSection) {
      const aboutMeRect = aboutMeSection.getBoundingClientRect();
      const aboutMeTop = aboutMeRect.top + window.scrollY;
      
      // El asistente se oculta cuando se llega al inicio del componente "Sobre mí"
      this.isAssistantVisible = window.scrollY < aboutMeTop;
    } else {
      // Fallback: usar el método anterior si no encuentra la sección
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      this.isAssistantVisible = scrollY < windowHeight * 1.2;
    }
  }

  ngOnDestroy() {
    if (this.assistantTimer) {
      clearTimeout(this.assistantTimer);
    }
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
    }
  }

  openAssistantModal() {
    this.isAssistantModalOpen = true;
    this.isAssistantLoading = true;
    document.body.style.overflow = 'hidden';
  }

  closeAssistantModal() {
    this.isAssistantModalOpen = false;
    this.isAssistantLoading = true;
    document.body.style.overflow = 'auto';
  }

  onIframeLoad() {
    this.isAssistantLoading = false;
  }
} 