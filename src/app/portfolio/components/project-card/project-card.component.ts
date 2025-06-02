import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, Technology } from '../../../core/interfaces/project.interface';

type ImageType = 'desktop' | 'tablet' | 'mobile';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() projectModalOpen = new EventEmitter<Project>();

  selectedImageType: ImageType = 'desktop';

  getStatusColor(): string {
    switch (this.project.status) {
      case 'completed':
        return 'text-green-500';
      case 'in-progress':
        return 'text-yellow-500';
      case 'planned':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  }

  getStatusText(): string {
    switch (this.project.status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En Progreso';
      case 'planned':
        return 'Planificado';
      default:
        return 'Desconocido';
    }
  }

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
          return this.project.images[0]; // Primera imagen (desktop)
        case 'tablet':
          return this.project.images[1]; // Segunda imagen (tablet)
        case 'mobile':
          return this.project.images[2]; // Tercera imagen (mobile)
        default:
          return this.project.images[0];
      }
    }
    
    // Fallback: usar imageUrl principal
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
    // Mostrar controles de dispositivos para proyectos fullstack y frontend
    return this.project.category === 'fullstack' || this.project.category === 'frontend';
  }
} 