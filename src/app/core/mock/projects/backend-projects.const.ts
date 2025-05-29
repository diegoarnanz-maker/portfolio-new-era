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
    modalData: {
      title: 'API REST con Spring Boot',
      description: 'Explora la arquitectura y endpoints de esta API RESTful robusta.',
      images: [
        '/assets/img/projects/rest-api/modal/swagger-docs.jpg',
        '/assets/img/projects/rest-api/modal/postman-tests.jpg',
        '/assets/img/projects/rest-api/modal/database-schema.jpg',
        '/assets/img/projects/rest-api/modal/security-config.jpg'
      ],
      features: [
        'Documentación automática con Swagger',
        'Autenticación JWT segura',
        'Base de datos PostgreSQL optimizada',
        'Validación de datos robusta',
        'Manejo de errores centralizado',
        'Tests unitarios y de integración'
      ]
    },
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
    modalData: {
      title: 'Arquitectura de Microservicios',
      description: 'Descubre la arquitectura distribuida y la comunicación entre servicios.',
      images: [
        '/assets/img/projects/microservices/modal/architecture.jpg',
        '/assets/img/projects/microservices/modal/api-gateway.jpg',
        '/assets/img/projects/microservices/modal/service-discovery.jpg',
        '/assets/img/projects/microservices/modal/monitoring.jpg'
      ],
      features: [
        'API Gateway centralizado',
        'Service Discovery automático',
        'Circuit Breaker pattern',
        'Comunicación asíncrona con RabbitMQ',
        'Monitoreo distribuido',
        'Escalabilidad horizontal'
      ]
    },
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
    modalData: {
      title: 'Gateway de Pagos Seguro',
      description: 'Conoce el sistema de procesamiento de pagos con múltiples proveedores.',
      images: [
        '/assets/img/projects/payment-gateway/modal/payment-flow.jpg',
        '/assets/img/projects/payment-gateway/modal/providers.jpg',
        '/assets/img/projects/payment-gateway/modal/webhooks.jpg',
        '/assets/img/projects/payment-gateway/modal/reconciliation.jpg'
      ],
      features: [
        'Integración con múltiples proveedores',
        'Procesamiento seguro PCI DSS',
        'Sistema de webhooks robusto',
        'Reconciliación automática',
        'Detección de fraude',
        'Reportes financieros detallados'
      ]
    },
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
    modalData: {
      title: 'Servicio de Notificaciones Masivas',
      description: 'Explora el sistema de envío multicanal de notificaciones.',
      images: [
        '/assets/img/projects/notification-service/modal/dashboard.jpg',
        '/assets/img/projects/notification-service/modal/templates.jpg',
        '/assets/img/projects/notification-service/modal/queue-management.jpg',
        '/assets/img/projects/notification-service/modal/analytics.jpg'
      ],
      features: [
        'Envío multicanal (Email, SMS, Push)',
        'Sistema de plantillas dinámicas',
        'Colas de trabajo con Redis',
        'Programación de envíos',
        'Analytics de entrega',
        'API RESTful para integración'
      ]
    },
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
    modalData: {
      title: 'API de Analytics en Tiempo Real',
      description: 'Descubre las capacidades de análisis de datos y generación de insights.',
      images: [
        '/assets/img/projects/analytics-api/modal/data-pipeline.jpg',
        '/assets/img/projects/analytics-api/modal/real-time-dashboard.jpg',
        '/assets/img/projects/analytics-api/modal/custom-reports.jpg',
        '/assets/img/projects/analytics-api/modal/alerts.jpg'
      ],
      features: [
        'Pipeline de datos en tiempo real',
        'Agregaciones complejas optimizadas',
        'Dashboards personalizables',
        'Sistema de alertas inteligentes',
        'Exportación de reportes',
        'API de consultas flexibles'
      ]
    },
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
    modalData: {
      title: 'Servicio de Almacenamiento Avanzado',
      description: 'Conoce las funcionalidades de gestión y optimización de archivos.',
      images: [
        '/assets/img/projects/file-storage/modal/upload-interface.jpg',
        '/assets/img/projects/file-storage/modal/file-management.jpg',
        '/assets/img/projects/file-storage/modal/cdn-integration.jpg',
        '/assets/img/projects/file-storage/modal/version-control.jpg'
      ],
      features: [
        'Upload con drag & drop',
        'Compresión automática de imágenes',
        'Integración con CDN',
        'Control de versiones de archivos',
        'Metadatos y etiquetado',
        'API de búsqueda avanzada'
      ]
    },
    category: 'backend',
    featured: false,
    status: 'planned',
  },
]; 