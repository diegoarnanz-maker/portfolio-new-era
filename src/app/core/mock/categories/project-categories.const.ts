import { ProjectCategory } from '../../interfaces/project-category.interface';
import { FULLSTACK_PROJECTS } from '../projects/fullstack-projects.const';
import { BACKEND_PROJECTS } from '../projects/backend-projects.const';
import { FRONTEND_PROJECTS } from '../projects/frontend-projects.const';
import { IA_ASSISTANT_PROJECTS } from '../projects/ia-assistant-projects.const';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'fullstack',
    title: 'Fullstack',
    description: 'Proyectos completos con frontend y backend',
    color: 'action-default',
    projects: FULLSTACK_PROJECTS,
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs, microservicios y arquitecturas del servidor',
    color: 'text-accent',
    projects: BACKEND_PROJECTS,
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces de usuario y aplicaciones cliente',
    color: 'action-hover',
    projects: FRONTEND_PROJECTS,
  },
  {
    id: 'ia_assistants',
    title: 'IA & Assistants',
    description: 'Proyectos de inteligencia artificial y asistentes',
    color: 'text-accent',
    projects: IA_ASSISTANT_PROJECTS,
  },
]; 