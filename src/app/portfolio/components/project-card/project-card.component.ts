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

  getIAAssistantLabel(): string {
    // Verificar si el proyecto usa Python
    const usesPython = this.project.technologies.some(tech => 
      tech.name.toLowerCase().includes('python')
    );
    
    return usesPython ? 'PYTHON ENGINE' : 'N8N FLOWS';
  }

  usesPython(): boolean {
    return this.project.technologies.some(tech => 
      tech.name.toLowerCase().includes('python')
    );
  }

  getChatUrl(): string {
    // Por ahora solo el proyecto AI career conversation tiene chat
    if (this.project.title === 'AI career conversation') {
      return 'https://huggingface.co/spaces/diegodev96/mi-asistente-personal';
    }
    return '';
  }

  // Método para determinar si mostrar botón de demo/chat según el tipo de proyecto
  shouldShowDemoButton(): boolean {
    // Solo mostrar para proyectos de IA que usen Python (no para N8N FLOWS)
    return this.project.category === 'ia_assistants' && this.usesPython();
  }

  // Método para obtener la URL de demo según el tipo de proyecto
  getDemoUrl(): string {
    if (this.usesPython()) {
      // Para proyectos de Python, usar la URL de chat si existe
      return this.getChatUrl();
    } else {
      // Para proyectos de n8n, podrías agregar URLs específicas aquí
      // Por ejemplo, enlaces a workflows de n8n o demos específicas
      return '';
    }
  }

  // Método para obtener el texto del botón según el tipo de proyecto
  getDemoButtonText(): string {
    if (this.usesPython()) {
      return 'Chat en Vivo';
    } else {
      return 'Ver Workflow';
    }
  }

  // Método para obtener el icono del botón según el tipo de proyecto
  getDemoButtonIcon(): string {
    if (this.usesPython()) {
      return 'chat'; // Icono de chat para Python
    } else {
      return 'workflow'; // Icono de workflow para n8n
    }
  }
} 