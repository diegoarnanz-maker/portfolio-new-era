import { Technology } from './technology.interface';
import { ProjectCategory } from './project-category.interface';

export interface ProjectModalData {
  title: string;
  description: string;
  longDescription?: string; // Descripción más detallada
  images: string[]; // Array de rutas de imágenes principales (desktop, tablet, mobile)
  demoImages?: string[]; // Array de imágenes demo de la carpeta demo/
  features: string[]; // Lista de características principales
  technicalDetails?: string[]; // Detalles técnicos adicionales
  challenges?: string[]; // Desafíos superados en el proyecto
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
