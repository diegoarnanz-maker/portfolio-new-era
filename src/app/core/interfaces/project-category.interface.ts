import { Project } from './project.interface';

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  projects: Project[];
} 