export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
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

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  projects: Project[];
}
