import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, Technology } from '../../../core/interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() projectModalOpen = new EventEmitter<Project>();

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

  onImageError(event: any): void {
    event.target.src = this.getPlaceholderImage();
  }

  openProjectModal(): void {
    this.projectModalOpen.emit(this.project);
  }
} 