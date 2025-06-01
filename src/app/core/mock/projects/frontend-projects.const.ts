import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const FRONTEND_PROJECTS: Project[] = [
  {
    id: 'dashboard-admin',
    title: 'Dashboard Administrativo',
    description: 'Panel de administración con gráficos interactivos, gestión de usuarios y reportes en tiempo real.',
    shortDescription: 'Dashboard admin con gráficos interactivos',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/dashboard.jpg',
    githubUrl: 'https://github.com/usuario/dashboard',
    modalData: {
      title: 'Dashboard Administrativo Interactivo',
      description: 'Explora la interfaz de administración con gráficos y métricas en tiempo real.',
      images: [
        '/assets/img/projects/dashboard/modal/overview.jpg',
        '/assets/img/projects/dashboard/modal/charts.jpg',
        '/assets/img/projects/dashboard/modal/user-management.jpg',
        '/assets/img/projects/dashboard/modal/reports.jpg'
      ],
      features: [
        'Gráficos interactivos con Chart.js',
        'Gestión completa de usuarios',
        'Reportes exportables en PDF/Excel',
        'Notificaciones en tiempo real',
        'Tema claro/oscuro personalizable',
        'Responsive design optimizado'
      ]
    },
    category: 'frontend',
    featured: true,
    status: 'completed',
  }
]; 