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
    
    // Extraer la ruta base y el nombre del archivo
    const basePath = this.project.imageUrl.replace(/DESKTOP_[^/]+\.png$/, '');
    const fileName = this.project.imageUrl.split('/').pop()?.replace('DESKTOP_', '') || '';
    
    // Construir la nueva URL según el tipo seleccionado
    switch (this.selectedImageType) {
      case 'tablet':
        return `${basePath}TABLET_${fileName}`;
      case 'mobile':
        return `${basePath}MOBILE_${fileName}`;
      default:
        return this.project.imageUrl; // desktop por defecto
    }
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
} 