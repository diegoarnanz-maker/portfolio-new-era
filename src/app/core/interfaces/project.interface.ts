import { Technology } from './technology.interface';

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
  liveUrl?: string;
  category: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}
