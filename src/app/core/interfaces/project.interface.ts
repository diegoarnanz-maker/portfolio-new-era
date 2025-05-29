export interface Technology {
  name: string;
  icon: string; // Ruta al archivo SVG del icono
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

// Mapeo de tecnologías disponibles con sus iconos
export const AVAILABLE_TECHNOLOGIES: { [key: string]: Technology } = {
  angular: {
    name: 'Angular',
    icon: '/assets/img/icons/angular.svg'
  },
  dotnet: {
    name: '.NET',
    icon: '/assets/img/icons/dotnet.svg'
  },
  'spring-boot': {
    name: 'Spring Boot',
    icon: '/assets/img/icons/spring-boot.svg'
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: '/assets/img/icons/tailwind.svg'
  },
  sql: {
    name: 'SQL',
    icon: '/assets/img/icons/sql.svg'
  },
  github: {
    name: 'GitHub',
    icon: '/assets/img/icons/github.svg'
  },
  postman: {
    name: 'Postman',
    icon: '/assets/img/icons/postman.svg'
  },
  cursor: {
    name: 'Cursor',
    icon: '/assets/img/icons/cursor.svg'
  },
  n8n: {
    name: 'n8n',
    icon: '/assets/img/icons/n8n.svg'
  }
};
