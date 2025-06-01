import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const FULLSTACK_PROJECTS: Project[] = [
  {
    id: 'indimetra',
    title: 'Indimetra',
    description: 'Indimetra es una aplicación web fullstack que permite a los usuarios interactuar con cortometrajes de manera inmersiva. Desarrollada con Angular en el frontend y Spring Boot en el backend, ofrece una experiencia multimedia completa.',
    shortDescription: 'Aplicación web para interactuar con cortometrajes',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/indimetra/DESKTOP_indimetra.png',
    githubUrl: 'https://github.com/usuario/indimetra',
    modalData: {
      title: 'Indimetra - Plataforma de Cortometrajes Interactivos',
      description: 'Explora la plataforma que revoluciona la forma de experimentar cortometrajes con interactividad avanzada.',
      longDescription: 'Indimetra es una plataforma web fullstack innovadora que transforma la experiencia tradicional de visualización de cortometrajes. Desarrollada con Angular 17 y Spring Boot, integra tecnologías modernas para crear una experiencia multimedia inmersiva y altamente interactiva.',
      images: [
        '/assets/img/projects/fullstack/indimetra/DESKTOP_indimetra.png',
        '/assets/img/projects/fullstack/indimetra/TABLET_indimetra.png',
        '/assets/img/projects/fullstack/indimetra/MOBILE_indimetra.png'
      ],
      demoImages: [
        '/assets/img/projects/fullstack/indimetra/demo/home.png',
        '/assets/img/projects/fullstack/indimetra/demo/explorar.png',
        '/assets/img/projects/fullstack/indimetra/demo/cortometraje_detail.png',
        '/assets/img/projects/fullstack/indimetra/demo/registro.png',
        '/assets/img/projects/fullstack/indimetra/demo/admin_usuarios.png',
        '/assets/img/projects/fullstack/indimetra/demo/admin_categorias.png',
        '/assets/img/projects/fullstack/indimetra/demo/admin_resenas.png'
      ],
      features: [
        'Interfaz inmersiva para visualización de cortometrajes',
        'Sistema de interacción en tiempo real',
        'Diseño responsive optimizado para todos los dispositivos',
        'Backend robusto con Spring Boot',
        'Gestión de contenido multimedia',
        'Experiencia de usuario fluida y moderna'
      ],
      technicalDetails: [
        'Frontend desarrollado con Angular 17 y Tailwind CSS',
        'Backend API REST con Spring Boot y Spring Security',
        'Base de datos PostgreSQL para gestión de contenido',
        'Autenticación JWT para seguridad',
        'Optimización de carga de videos y multimedia',
        'Arquitectura modular y escalable'
      ],
      challenges: [
        'Optimización de rendimiento para contenido multimedia pesado',
        'Implementación de interactividad en tiempo real',
        'Diseño responsive para diferentes dispositivos',
        'Gestión eficiente del estado de reproducción'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },
  {
    id: 'talent-hub',
    title: 'Talent Hub',
    description: 'Talent Hub es una aplicación web fullstack que permite a los usuarios gestionar usuarios de manera eficiente. Desarrollada con Angular en el frontend y Spring Boot en el backend, ofrece una experiencia de usuario moderna y segura.',
    shortDescription: 'Aplicación web para gestionar usuarios',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/talentHub/DESKTOP_talenthub.png',
    githubUrl: 'https://github.com/usuario/talent-hub',
    modalData: {
      title: 'Talent Hub - Gestión de Talentos',
      description: 'Explora la plataforma que revoluciona la forma de gestionar talentos de manera eficiente y segura.',
      longDescription: 'Talent Hub es una plataforma completa de gestión de recursos humanos que conecta empresas con talento cualificado. Desarrollada con tecnologías modernas, ofrece herramientas avanzadas para el reclutamiento, gestión de candidatos y administración de vacantes.',
      images: [
        '/assets/img/projects/fullstack/talentHub/DESKTOP_talenthub.png',
        '/assets/img/projects/fullstack/talentHub/TABLET_talenthub.png',
        '/assets/img/projects/fullstack/talentHub/MOBILE_talenthub.png'
      ],
      demoImages: [
        '/assets/img/projects/fullstack/talentHub/demo/login.png',
        '/assets/img/projects/fullstack/talentHub/demo/registro.png',
        '/assets/img/projects/fullstack/talentHub/demo/admin_usuarios.png',
        '/assets/img/projects/fullstack/talentHub/demo/admin_empresas.png',
        '/assets/img/projects/fullstack/talentHub/demo/admin_categorias.png',
        '/assets/img/projects/fullstack/talentHub/demo/empresa_vacante-detail.png'
      ],
      features: [
        'Sistema completo de autenticación y autorización',
        'Gestión de usuarios con roles y permisos granulares',
        'Panel administrativo para empresas y candidatos',
        'Sistema de notificaciones en tiempo real',
        'Gestión avanzada de vacantes y postulaciones',
        'Interfaz intuitiva y responsive'
      ],
      technicalDetails: [
        'Frontend con Angular 17, Tailwind CSS y componentes reutilizables',
        'Backend API REST con Spring Boot y Spring Security',
        'Base de datos relacional con JPA/Hibernate',
        'Autenticación JWT con refresh tokens',
        'Validación de datos tanto en frontend como backend',
        'Documentación API con Swagger/OpenAPI'
      ],
      challenges: [
        'Implementación de sistema de roles y permisos complejo',
        'Optimización de consultas para grandes volúmenes de datos',
        'Diseño de UX intuitivo para diferentes tipos de usuarios',
        'Integración segura entre frontend y backend'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },
  {
    id: 'series',
    title: 'Series',
    description: 'Series es una aplicación web fullstack que permite a los usuarios interactuar con series de manera inmersiva. Desarrollada con Angular en el frontend y Spring Boot en el backend, ofrece una experiencia multimedia completa.',
    shortDescription: 'Aplicación web para interactuar con series',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/series/DESKTOP_series.png',
    githubUrl: 'https://github.com/usuario/series',
    modalData: {
      title: 'Series - Plataforma de Series Interactivas',
      description: 'Explora la plataforma que revoluciona la forma de experimentar series con interactividad avanzada.',
      longDescription: 'Una plataforma moderna para la gestión y visualización de series de televisión. Permite a los usuarios descubrir, seguir y gestionar sus series favoritas con una interfaz intuitiva y funcionalidades avanzadas de recomendación.',
      images: [
        '/assets/img/projects/fullstack/series/DESKTOP_series.png',
        '/assets/img/projects/fullstack/series/TABLET_series.png',
        '/assets/img/projects/fullstack/series/MOBILE_series.png'
      ],
      demoImages: [
        '/assets/img/projects/fullstack/series/demo/serie_detail.png',
        '/assets/img/projects/fullstack/series/demo/admin_menu.png',
        '/assets/img/projects/fullstack/series/demo/admin_usuarios.png',
        '/assets/img/projects/fullstack/series/demo/admin_resenas.png'
      ],
      features: [
        'Catálogo completo de series con información detallada',
        'Sistema de recomendaciones personalizado',
        'Lista de seguimiento y favoritos',
        'Búsqueda avanzada con filtros múltiples',
        'Calificaciones y reseñas de usuarios',
        'Notificaciones de nuevos episodios'
      ],
      technicalDetails: [
        'Integración con APIs externas de información de series',
        'Sistema de caché para optimizar rendimiento',
        'Algoritmos de recomendación basados en preferencias',
        'Gestión de estado compleja con RxJS',
        'Lazy loading para optimización de carga',
        'PWA con funcionalidades offline'
      ],
      challenges: [
        'Integración eficiente con múltiples APIs externas',
        'Implementación de algoritmos de recomendación',
        'Optimización de rendimiento con grandes catálogos',
        'Sincronización de datos en tiempo real'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },
  {
    id: 'user-management',
    title: 'User Management',
    description: 'User Management es una aplicación web fullstack que permite a los usuarios gestionar usuarios de manera eficiente. Desarrollada con Angular en el frontend y Spring Boot en el backend, ofrece una experiencia de usuario moderna y segura.',
    shortDescription: 'Aplicación web para gestionar usuarios',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/manejo-usuarios/DESKTOP_manejo-usuarios.png',
    githubUrl: 'https://github.com/usuario/user-management',
    modalData: {
      title: 'User Management - Gestión de Usuarios',
      description: 'Explora la plataforma que revoluciona la forma de gestionar usuarios de manera eficiente y segura.',
      longDescription: 'Sistema completo de gestión de usuarios empresarial que proporciona herramientas avanzadas para la administración de cuentas, roles, permisos y auditoría. Diseñado para organizaciones que requieren un control granular sobre el acceso y la gestión de usuarios.',
      images: [
        '/assets/img/projects/fullstack/manejo-usuarios/DESKTOP_manejo-usuarios.png',
        '/assets/img/projects/fullstack/manejo-usuarios/TABLET_manejo-usuarios.png',
        '/assets/img/projects/fullstack/manejo-usuarios/MOBILE_manejo-usuarios.png'
      ],
      demoImages: [
        '/assets/img/projects/fullstack/manejo-usuarios/demo/login.png',
        '/assets/img/projects/fullstack/manejo-usuarios/demo/registro.png',
        '/assets/img/projects/fullstack/manejo-usuarios/demo/usuario_detail.png'
      ],
      features: [
        'Dashboard administrativo con métricas en tiempo real',
        'CRUD completo de usuarios con validaciones avanzadas',
        'Sistema de roles y permisos jerárquico',
        'Auditoría completa de acciones de usuarios',
        'Importación/exportación masiva de datos',
        'Notificaciones y alertas automáticas'
      ],
      technicalDetails: [
        'Arquitectura hexagonal en el backend',
        'Patrón Repository para acceso a datos',
        'Validación de datos con Bean Validation',
        'Logging y monitoreo con Spring Boot Actuator',
        'Tests unitarios y de integración completos',
        'Documentación automática con Swagger'
      ],
      challenges: [
        'Diseño de arquitectura escalable y mantenible',
        'Implementación de auditoría completa del sistema',
        'Optimización de consultas para grandes volúmenes',
        'Gestión segura de datos sensibles'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },

]; 