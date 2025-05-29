import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';
import { 
  BACKEND_PLACEHOLDER_DESKTOP, 
  BACKEND_PLACEHOLDER_TABLET, 
  BACKEND_PLACEHOLDER_MOBILE 
} from '../constants/placeholders.const';

export const BACKEND_PROJECTS: Project[] = [
  {
    id: 'rest-api',
    title: 'REST API con Spring Boot',
    description: 'API RESTful robusta con autenticación JWT, documentación con Swagger y base de datos PostgreSQL.',
    shortDescription: 'API REST con Spring Boot y JWT',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/api.jpg',
    imageDesktop: BACKEND_PLACEHOLDER_DESKTOP,
    imageMobile: BACKEND_PLACEHOLDER_MOBILE,
    imageTablet: BACKEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/rest-api',
    category: 'backend',
    featured: true,
    status: 'completed',
  },
  {
    id: 'microservices',
    title: 'Arquitectura de Microservicios',
    description: 'Sistema distribuido con múltiples microservicios, gateway API y comunicación asíncrona.',
    shortDescription: 'Sistema de microservicios distribuido',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/microservices.jpg',
    imageDesktop: BACKEND_PLACEHOLDER_DESKTOP,
    imageMobile: BACKEND_PLACEHOLDER_MOBILE,
    imageTablet: BACKEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/microservices',
    category: 'backend',
    featured: false,
    status: 'completed',
  },
  {
    id: 'payment-gateway',
    title: 'Gateway de Pagos',
    description: 'Sistema de procesamiento de pagos seguro con múltiples proveedores, webhooks y reconciliación automática.',
    shortDescription: 'Gateway de pagos multi-proveedor',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/payment-gateway.jpg',
    imageDesktop: BACKEND_PLACEHOLDER_DESKTOP,
    imageMobile: BACKEND_PLACEHOLDER_MOBILE,
    imageTablet: BACKEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/payment-gateway',
    category: 'backend',
    featured: true,
    status: 'completed',
  },
  {
    id: 'notification-service',
    title: 'Servicio de Notificaciones',
    description: 'Microservicio para envío masivo de notificaciones por email, SMS y push notifications con colas de trabajo.',
    shortDescription: 'Servicio de notificaciones masivas',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/notification-service.jpg',
    imageDesktop: BACKEND_PLACEHOLDER_DESKTOP,
    imageMobile: BACKEND_PLACEHOLDER_MOBILE,
    imageTablet: BACKEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/notification-service',
    category: 'backend',
    featured: false,
    status: 'completed',
  },
  {
    id: 'analytics-api',
    title: 'API de Analytics',
    description: 'Sistema de recolección y análisis de datos en tiempo real con dashboards y alertas personalizables.',
    shortDescription: 'API de analytics en tiempo real',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/analytics-api.jpg',
    imageDesktop: BACKEND_PLACEHOLDER_DESKTOP,
    imageMobile: BACKEND_PLACEHOLDER_MOBILE,
    imageTablet: BACKEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/analytics-api',
    category: 'backend',
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'file-storage-service',
    title: 'Servicio de Almacenamiento',
    description: 'API para gestión de archivos con compresión automática, CDN y control de versiones.',
    shortDescription: 'Servicio de almacenamiento de archivos',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/file-storage.jpg',
    imageDesktop: BACKEND_PLACEHOLDER_DESKTOP,
    imageMobile: BACKEND_PLACEHOLDER_MOBILE,
    imageTablet: BACKEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/file-storage-service',
    category: 'backend',
    featured: false,
    status: 'planned',
  },
]; 