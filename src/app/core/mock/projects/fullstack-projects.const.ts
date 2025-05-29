import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';
import { 
  FULLSTACK_PLACEHOLDER_DESKTOP, 
  FULLSTACK_PLACEHOLDER_TABLET, 
  FULLSTACK_PLACEHOLDER_MOBILE 
} from '../constants/placeholders.const';

export const FULLSTACK_PROJECTS: Project[] = [
  {
    id: 'portfolio-web',
    title: 'Portfolio Personal',
    description: 'Portfolio personal desarrollado con Angular y Tailwind CSS, con sistema de temas claro/oscuro y diseño responsive.',
    shortDescription: 'Portfolio personal con Angular y Tailwind CSS',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/portfolio.jpg',
    imageDesktop: FULLSTACK_PLACEHOLDER_DESKTOP,
    imageMobile: FULLSTACK_PLACEHOLDER_MOBILE,
    imageTablet: FULLSTACK_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/portfolio',
    modalData: {
      title: 'Recorrido por mi Portfolio Personal',
      description: 'Explora las características principales de mi portfolio desarrollado con Angular y Tailwind CSS.',
      images: [
        '/assets/img/projects/portfolio/modal/home.jpg',
        '/assets/img/projects/portfolio/modal/projects.jpg',
        '/assets/img/projects/portfolio/modal/about.jpg',
        '/assets/img/projects/portfolio/modal/contact.jpg'
      ],
      features: [
        'Diseño responsive adaptable a todos los dispositivos',
        'Sistema de temas claro/oscuro dinámico',
        'Animaciones suaves y transiciones elegantes',
        'Sección de proyectos con filtros por categoría',
        'Formulario de contacto funcional',
        'Optimización SEO y rendimiento'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con gestión de productos, carrito de compras y sistema de pagos.',
    shortDescription: 'Plataforma de e-commerce completa',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
    ],
    imageUrl: '/assets/img/projects/ecommerce.jpg',
    imageDesktop: FULLSTACK_PLACEHOLDER_DESKTOP,
    imageMobile: FULLSTACK_PLACEHOLDER_MOBILE,
    imageTablet: FULLSTACK_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/ecommerce',
    modalData: {
      title: 'Plataforma E-commerce Completa',
      description: 'Descubre todas las funcionalidades de esta plataforma de comercio electrónico moderna.',
      images: [
        '/assets/img/projects/ecommerce/modal/catalog.jpg',
        '/assets/img/projects/ecommerce/modal/product-detail.jpg',
        '/assets/img/projects/ecommerce/modal/cart.jpg',
        '/assets/img/projects/ecommerce/modal/checkout.jpg',
        '/assets/img/projects/ecommerce/modal/admin-panel.jpg'
      ],
      features: [
        'Catálogo de productos con búsqueda avanzada',
        'Carrito de compras persistente',
        'Sistema de pagos integrado (Stripe)',
        'Panel de administración completo',
        'Gestión de inventario en tiempo real',
        'Sistema de reseñas y valoraciones'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'task-manager',
    title: 'Sistema de Gestión de Tareas',
    description: 'Aplicación completa para gestión de proyectos y tareas con colaboración en tiempo real, notificaciones y reportes.',
    shortDescription: 'Sistema de gestión de tareas colaborativo',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
    ],
    imageUrl: '/assets/img/projects/task-manager.jpg',
    imageDesktop: FULLSTACK_PLACEHOLDER_DESKTOP,
    imageMobile: FULLSTACK_PLACEHOLDER_MOBILE,
    imageTablet: FULLSTACK_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/task-manager',
    modalData: {
      title: 'Sistema de Gestión de Tareas Colaborativo',
      description: 'Explora las capacidades de colaboración y gestión de proyectos en tiempo real.',
      images: [
        '/assets/img/projects/task-manager/modal/dashboard.jpg',
        '/assets/img/projects/task-manager/modal/kanban.jpg',
        '/assets/img/projects/task-manager/modal/calendar.jpg',
        '/assets/img/projects/task-manager/modal/team.jpg',
        '/assets/img/projects/task-manager/modal/reports.jpg'
      ],
      features: [
        'Dashboard con métricas en tiempo real',
        'Tablero Kanban interactivo',
        'Calendario integrado de tareas',
        'Chat en tiempo real entre equipos',
        'Notificaciones push automáticas',
        'Reportes y analytics avanzados'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },
  {
    id: 'social-network',
    title: 'Red Social Corporativa',
    description: 'Plataforma social interna para empresas con chat, publicaciones, eventos y sistema de gamificación.',
    shortDescription: 'Red social para empresas',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
    ],
    imageUrl: '/assets/img/projects/social-network.jpg',
    imageDesktop: FULLSTACK_PLACEHOLDER_DESKTOP,
    imageMobile: FULLSTACK_PLACEHOLDER_MOBILE,
    imageTablet: FULLSTACK_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/social-network',
    modalData: {
      title: 'Red Social Corporativa',
      description: 'Conoce las funcionalidades sociales diseñadas específicamente para entornos empresariales.',
      images: [
        '/assets/img/projects/social-network/modal/feed.jpg',
        '/assets/img/projects/social-network/modal/chat.jpg',
        '/assets/img/projects/social-network/modal/events.jpg',
        '/assets/img/projects/social-network/modal/gamification.jpg'
      ],
      features: [
        'Feed de noticias corporativas',
        'Sistema de chat grupal e individual',
        'Gestión de eventos empresariales',
        'Sistema de gamificación y logros',
        'Perfiles profesionales detallados',
        'Integración con herramientas corporativas'
      ]
    },
    category: 'fullstack',
    featured: false,
    status: 'completed',
  },
  {
    id: 'learning-platform',
    title: 'Plataforma de Aprendizaje',
    description: 'Sistema LMS completo con cursos, evaluaciones, progreso de estudiantes y herramientas de comunicación.',
    shortDescription: 'Plataforma LMS educativa',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
    ],
    imageUrl: '/assets/img/projects/learning-platform.jpg',
    imageDesktop: FULLSTACK_PLACEHOLDER_DESKTOP,
    imageMobile: FULLSTACK_PLACEHOLDER_MOBILE,
    imageTablet: FULLSTACK_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/learning-platform',
    modalData: {
      title: 'Plataforma LMS Educativa',
      description: 'Descubre las herramientas educativas y de seguimiento de progreso académico.',
      images: [
        '/assets/img/projects/learning-platform/modal/courses.jpg',
        '/assets/img/projects/learning-platform/modal/lesson.jpg',
        '/assets/img/projects/learning-platform/modal/quiz.jpg',
        '/assets/img/projects/learning-platform/modal/progress.jpg'
      ],
      features: [
        'Catálogo de cursos interactivos',
        'Reproductor de video con marcadores',
        'Sistema de evaluaciones automáticas',
        'Seguimiento de progreso detallado',
        'Foros de discusión por curso',
        'Certificados digitales automáticos'
      ]
    },
    category: 'fullstack',
    featured: false,
    status: 'in-progress',
  },
  {
    id: 'inventory-system',
    title: 'Sistema de Inventario',
    description: 'Aplicación empresarial para gestión de inventario con códigos QR, alertas automáticas y reportes avanzados.',
    shortDescription: 'Sistema de inventario empresarial',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
    ],
    imageUrl: '/assets/img/projects/inventory-system.jpg',
    imageDesktop: FULLSTACK_PLACEHOLDER_DESKTOP,
    imageMobile: FULLSTACK_PLACEHOLDER_MOBILE,
    imageTablet: FULLSTACK_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/inventory-system',
    modalData: {
      title: 'Sistema de Inventario Empresarial',
      description: 'Explora las capacidades avanzadas de gestión de inventario y control de stock.',
      images: [
        '/assets/img/projects/inventory-system/modal/dashboard.jpg',
        '/assets/img/projects/inventory-system/modal/products.jpg',
        '/assets/img/projects/inventory-system/modal/qr-scanner.jpg',
        '/assets/img/projects/inventory-system/modal/reports.jpg'
      ],
      features: [
        'Dashboard con métricas de inventario',
        'Gestión de productos con códigos QR',
        'Escáner QR móvil integrado',
        'Alertas automáticas de stock bajo',
        'Reportes de movimientos detallados',
        'Integración con proveedores'
      ]
    },
    category: 'fullstack',
    featured: false,
    status: 'planned',
  },
]; 