import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const FULLSTACK_PROJECTS: Project[] = [
  {
    title: 'Indimetra',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['jwt'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/indimetra/DESKTOP_indimetra.png',
    imageTitles: [
      'Vista Desktop - Interfaz principal optimizada para pantallas grandes',
      'Vista Tablet - Diseño adaptativo para dispositivos medianos',
      'Vista Mobile - Experiencia móvil completamente responsive',
    ],
    githubUrl: 'https://github.com/usuario/indimetra',
    category: 'fullstack',
    status: 'completed',
    longDescription:
      'Indimetra es una plataforma web fullstack desarrollada con Angular 19, Spring Boot y Tailwind CSS, orientada a la visualización y gestión de cortometrajes. Incorpora autenticación JWT y un sistema seguro de roles para usuarios y administradores. Los usuarios pueden registrarse, explorar cortometrajes mediante filtros avanzados, dejar reseñas y marcar sus favoritos para verlos más tarde. El panel de administración permite gestionar cortometrajes, usuarios, reseñas y categorías de forma centralizada.',
    images: [
      '/assets/img/projects/fullstack/indimetra/DESKTOP_indimetra.png',
      '/assets/img/projects/fullstack/indimetra/TABLET_indimetra.png',
      '/assets/img/projects/fullstack/indimetra/MOBILE_indimetra.png',
    ],
    demoImages: [
      '/assets/img/projects/fullstack/indimetra/demo/home.png',
      '/assets/img/projects/fullstack/indimetra/demo/explorar.png',
      '/assets/img/projects/fullstack/indimetra/demo/cortometraje_detail.png',
      '/assets/img/projects/fullstack/indimetra/demo/registro.png',
      '/assets/img/projects/fullstack/indimetra/demo/admin_usuarios.png',
      '/assets/img/projects/fullstack/indimetra/demo/admin_categorias.png',
      '/assets/img/projects/fullstack/indimetra/demo/admin_resenas.png',
    ],
    demoImageTitles: [
      'Página de Inicio - Landing page con diseño atractivo y navegación intuitiva',
      'Explorar Cortometrajes - Catálogo dinámico con filtros por género, duración, idioma, etc.',
      'Detalle de Cortometraje - Información completa, reseñas y reproductor integrado',
      'Registro de Usuario - Proceso de registro con validaciones y experiencia fluida',
      'Panel Admin - Usuarios - Gestión de cuentas, activación, y control de roles',
      'Panel Admin - Categorías - Administración de colecciones y clasificaciones',
      'Panel Admin - Reseñas - Supervisión y moderación de opiniones de los usuarios',
    ],
    technicalDetails: [
      'Frontend desarrollado en Angular 19 con diseño responsive utilizando Tailwind CSS',
      'Backend con Spring Boot estructurado por capas, incluyendo seguridad con Spring Security',
      'Autenticación y autorización mediante JWT con control de roles (usuarios y admin)',
      'Base de datos MySQL para la gestión relacional de cortometrajes y usuarios',
      'Interfaz adaptada para desktop, tablet y móvil con navegación fluida',
      'Arquitectura modular escalable y mantenible a largo plazo',
    ],
    challenges: [
      'Implementación de un sistema robusto de seguridad con JWT y control de acceso',
      'Optimización de rendimiento en la carga y reproducción de vídeos',
      'Diseño de una experiencia de usuario coherente entre múltiples dispositivos',
      'Gestión eficiente de estado en favoritos, reseñas y filtros de búsqueda',
    ],
  },
  {
    title: 'Talent Hub',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/talentHub/DESKTOP_talenthub.png',
    imageTitles: [
      'Vista Desktop - Dashboard principal con herramientas de gestión completas',
      'Vista Tablet - Interfaz adaptada para dispositivos táctiles medianos',
      'Vista Mobile - Aplicación móvil optimizada para gestión sobre la marcha',
    ],
    githubUrl: 'https://github.com/usuario/talent-hub',
    category: 'fullstack',
    status: 'completed',
    longDescription:
      'Talent Hub es una plataforma fullstack de gestión de vacantes de empleo que conecta empresas con candidatos de forma eficaz. Permite a las empresas publicar ofertas, revisar solicitudes y gestionar vacantes, mientras que los usuarios pueden registrarse, postularse y hacer seguimiento de sus candidaturas. El sistema incorpora seguridad Basic Auth, control de roles (ADMIN, EMPRESA, USER) y una arquitectura robusta basada en Angular 19, Spring Boot y MySQL.',
    images: [
      '/assets/img/projects/fullstack/talentHub/DESKTOP_talenthub.png',
      '/assets/img/projects/fullstack/talentHub/TABLET_talenthub.png',
      '/assets/img/projects/fullstack/talentHub/MOBILE_talenthub.png',
    ],
    demoImages: [
      '/assets/img/projects/fullstack/talentHub/demo/login.png',
      '/assets/img/projects/fullstack/talentHub/demo/registro.png',
      '/assets/img/projects/fullstack/talentHub/demo/admin_usuarios.png',
      '/assets/img/projects/fullstack/talentHub/demo/admin_empresas.png',
      '/assets/img/projects/fullstack/talentHub/demo/admin_categorias.png',
      '/assets/img/projects/fullstack/talentHub/demo/empresa_vacante-detail.png',
    ],
    demoImageTitles: [
      'Inicio de Sesión - Autenticación segura con validación de credenciales',
      'Registro de Usuario - Formulario completo con validaciones avanzadas',
      'Gestión de Usuarios - Panel administrativo para control de cuentas',
      'Administración de Empresas - Gestión completa de perfiles empresariales',
      'Gestión de Categorías - Organización y clasificación de vacantes',
      'Detalle de Vacante - Vista completa con información y postulaciones',
    ],
    technicalDetails: [
      'Frontend desarrollado en Angular 19 y Tailwind CSS con estructura modular y responsive',
      'Backend en Spring Boot utilizando arquitectura por capas y JPA/Hibernate',
      'Base de datos relacional MySQL 8 con control de estados',
      'Autenticación y autorización con Basic Auth y refresh tokens para sesiones seguras',
      'Documentación de la API con Swagger y control de errores global mediante excepciones personalizadas',
      'Validación integral de datos en frontend y backend, y carga condicional de contenido',
    ],
    challenges: [
      'Implementación de seguridad completa con Basic Auth, roles y control de endpoints con @PreAuthorize',
      'Gestión eficiente de solicitudes de empleo y lógica de adjudicación de vacantes',
      'Diseño de interfaces intuitivas para tres roles diferentes (admin, empresa, usuario)',
      'Sincronización entre frontend y backend en la gestión de estados y seguimiento de solicitudes',
    ],
  },
  {
    title: 'Series',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/fullstack/series/DESKTOP_series.png',
    imageTitles: [
      'Vista Desktop - Catálogo completo con navegación avanzada',
      'Vista Tablet - Experiencia táctil optimizada para exploración',
      'Vista Mobile - App móvil para seguimiento de series favoritas',
    ],
    githubUrl: 'https://github.com/usuario/series',
    category: 'fullstack',
    status: 'completed',
    longDescription:
      'Series es una app fullstack para explorar y seguir series. Los usuarios pueden ver detalles, dejar reseñas con puntuación y marcar favoritas. Los administradores gestionan el catálogo, moderan reseñas y administran usuarios. Incluye autenticación con Basic Auth, control de roles (USER y ADMIN).',
    images: [
      '/assets/img/projects/fullstack/series/DESKTOP_series.png',
      '/assets/img/projects/fullstack/series/TABLET_series.png',
      '/assets/img/projects/fullstack/series/MOBILE_series.png',
    ],
    demoImages: [
      '/assets/img/projects/fullstack/series/demo/serie_detail.png',
      '/assets/img/projects/fullstack/series/demo/admin_menu.png',
      '/assets/img/projects/fullstack/series/demo/admin_usuarios.png',
      '/assets/img/projects/fullstack/series/demo/admin_resenas.png',
    ],
    demoImageTitles: [
      'Detalle de Serie - Información completa con episodios y recomendaciones',
      'Menú Administrativo - Panel de control con acceso a todas las funciones',
      'Gestión de Usuarios - Administración de cuentas y perfiles de usuario',
      'Moderación de Reseñas - Control de calidad de comentarios y valoraciones',
    ],
    technicalDetails: [
      'Frontend desarrollado en Angular con Tailwind CSS',
      'Backend API REST construida con Spring Boot y seguridad basada en Basic Auth',
      'Roles diferenciados (USER y ADMIN) con control de acceso por permisos',
    ],
    challenges: [
      'Diseño de un sistema de autenticación seguro con Basic Auth y control de roles',
      'Sincronización de datos entre usuario y servidor en tiempo real',
    ],
  },
  {
    title: 'User Management',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl:
      '/assets/img/projects/fullstack/manejo-usuarios/DESKTOP_manejo-usuarios.png',
    imageTitles: [
      'Vista Desktop - Dashboard administrativo con métricas y controles avanzados',
      'Vista Tablet - Interfaz de gestión adaptada para dispositivos táctiles',
      'Vista Mobile - Administración móvil para gestión remota de usuarios',
    ],
    githubUrl: 'https://github.com/usuario/user-management',
    category: 'fullstack',
    status: 'completed',
    longDescription:
      'User Management es una aplicación fullstack para la gestión de usuarios. Permite listar, editar y eliminar cuentas mediante autenticación con Basic Auth. Incluye control de roles y validaciones, ideal para entornos donde se requiere una administración básica pero segura de usuarios.',
    images: [
      '/assets/img/projects/fullstack/manejo-usuarios/DESKTOP_manejo-usuarios.png',
      '/assets/img/projects/fullstack/manejo-usuarios/TABLET_manejo-usuarios.png',
      '/assets/img/projects/fullstack/manejo-usuarios/MOBILE_manejo-usuarios.png',
    ],
    demoImages: [
      '/assets/img/projects/fullstack/manejo-usuarios/demo/login.png',
      '/assets/img/projects/fullstack/manejo-usuarios/demo/registro.png',
      '/assets/img/projects/fullstack/manejo-usuarios/demo/usuario_detail.png',
    ],
    demoImageTitles: [
      'Autenticación - Sistema de login seguro con validación de credenciales',
      'Registro de Cuenta - Formulario de alta con validaciones en tiempo real',
      'Perfil de Usuario - Vista detallada con información completa y editable',
    ],
    technicalDetails: [
      'Backend con arquitectura por capas y control de acceso mediante Basic Auth',
      'Gestión CRUD de usuarios con Spring Boot y JPA',
      'Frontend desarrollado en Angular con diseño responsive mediante Tailwind CSS',
      'Control de roles para operaciones permitidas',
    ],
    challenges: [
      'Implementar autenticación básica segura con control de acceso por rol',
      'Diseñar una interfaz de usuario clara para operaciones CRUD',
      'Manejar correctamente la edición y eliminación de usuarios en entorno real',
      'Validar datos del lado del cliente y servidor para evitar inconsistencias',
    ],
  },
];
