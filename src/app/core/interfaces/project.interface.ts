import { Technology } from './technology.interface';
import { ProjectCategory } from './project-category.interface';

export interface ProjectModalData {
  title: string;
  description: string;
  images: string[]; // Array de rutas de imágenes para el recorrido
  features: string[]; // Lista de características principales
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: Technology[];
  imageUrl: string;
  imageDesktop?: string;
  imageTablet?: string;
  imageMobile?: string;
  githubUrl?: string;
  modalData: ProjectModalData; // Datos para el modal de recorrido
  category: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

// Re-exportar tipos para compatibilidad
export type { Technology, ProjectCategory };
