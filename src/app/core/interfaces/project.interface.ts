import { Technology } from './technology.interface';
import { ProjectCategory } from './project-category.interface';

export interface Project {
  title: string;
  technologies: Technology[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  subcategory?: string;
  status: 'completed' | 'in-progress' | 'planned';
  
  // Tipo de motor para proyectos de IA
  aiEngine?: 'python' | 'n8n';
  
  // Campos para el modal
  longDescription?: string;
  images?: string[];
  imageTitles?: string[];
  demoImages?: string[];
  demoImageTitles?: string[];
  technicalDetails?: string[];
  challenges?: string[];
}

// Re-exportar tipos para compatibilidad
export type { Technology, ProjectCategory };
