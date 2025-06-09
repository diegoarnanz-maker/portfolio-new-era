import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { Project, Technology } from '../../../core/interfaces/project.interface';

type ImageType = 'desktop' | 'tablet' | 'mobile';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() projectModalOpen = new EventEmitter<Project>();

  private languageService = inject(LanguageService);
  
  selectedImageType: ImageType = 'desktop';
  technologiesExpanded = false;

  getPlaceholderImage(): string {
    const category = this.project.category || 'backend';
    return `/assets/img/projects/${category}/desktop/placeholder.svg`;
  }

  getCurrentImageUrl(): string {
    if (!this.project.imageUrl) return this.getPlaceholderImage();
    
    // Para proyectos backend, usar siempre la imagen principal
    if (!this.shouldShowDeviceControls()) {
      return this.project.imageUrl;
    }
    
    // Para proyectos fullstack y frontend, usar el array images si está disponible
    if (this.project.images && this.project.images.length >= 3) {
      switch (this.selectedImageType) {
        case 'desktop':
          return this.project.images[0];
        case 'tablet':
          return this.project.images[1];
        case 'mobile':
          return this.project.images[2];
        default:
          return this.project.images[0];
      }
    }
    
    return this.project.imageUrl;
  }

  selectImageType(type: ImageType): void {
    this.selectedImageType = type;
  }

  onImageError(event: any): void {
    event.target.src = this.getPlaceholderImage();
  }

  openProjectModal(): void {
    this.projectModalOpen.emit(this.project);
  }

  shouldShowDeviceControls(): boolean {
    return this.project.category === 'fullstack' || this.project.category === 'frontend';
  }

  getIAAssistantLabel(): string {
    return this.project.aiEngine === 'python' 
      ? this.languageService.getTranslation('projectCard.engines.python')
      : this.languageService.getTranslation('projectCard.engines.n8n');
  }

  usesPython(): boolean {
    return this.project.aiEngine === 'python';
  }

  getDemoUrl(): string {
    return this.project.demoUrl || '';
  }

  getDemoButtonText(): string {
    if (this.usesPython()) {
      return this.languageService.getTranslation('projectCard.buttons.chatLive');
    } else {
      return this.languageService.getTranslation('projectCard.buttons.viewWorkflow');
    }
  }

  getMaxVisibleTechnologies(): number {
    if (typeof window === 'undefined') return 3;
    
    const width = window.innerWidth;
    if (width < 768) return this.project.technologies.length; // Mobile: mostrar todas
    if (width >= 1280) return 3; // xl
    if (width >= 1024) return 2; // lg
    return 3; // md
  }

  onHoverStart(): void {
    this.technologiesExpanded = true;
  }

  onHoverEnd(): void {
    this.technologiesExpanded = false;
  }

  getVisibleTechnologies(): Technology[] {
    if (this.technologiesExpanded) {
      return this.project.technologies;
    }
    return this.project.technologies.slice(0, this.getMaxVisibleTechnologies());
  }

  hasHiddenTechnologies(): boolean {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return false; // En móviles nunca hay tecnologías ocultas
    }
    return this.project.technologies.length > this.getMaxVisibleTechnologies();
  }

  getHiddenTechnologies(): Technology[] {
    return this.project.technologies.slice(this.getMaxVisibleTechnologies());
  }

  isMobile(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  }
} 