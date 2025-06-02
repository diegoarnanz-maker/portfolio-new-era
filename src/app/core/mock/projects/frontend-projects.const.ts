import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const FRONTEND_PROJECTS: Project[] = [
  {
    title: 'Dashboard Administrativo',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/dashboard.jpg',
    githubUrl: 'https://github.com/usuario/dashboard',
    category: 'frontend',
    status: 'completed',
    longDescription: 'Panel de administración con gráficos interactivos, gestión de usuarios y reportes en tiempo real. Explora la interfaz de administración con gráficos y métricas en tiempo real.',
    images: [
      '/assets/img/projects/dashboard/modal/overview.jpg',
      '/assets/img/projects/dashboard/modal/charts.jpg',
      '/assets/img/projects/dashboard/modal/user-management.jpg',
      '/assets/img/projects/dashboard/modal/reports.jpg'
    ],
    technicalDetails: [
      'Gráficos interactivos con Chart.js',
      'Gestión completa de usuarios',
      'Reportes exportables en PDF/Excel',
      'Notificaciones en tiempo real',
      'Tema claro/oscuro personalizable',
      'Responsive design optimizado'
    ]
  }
]; 