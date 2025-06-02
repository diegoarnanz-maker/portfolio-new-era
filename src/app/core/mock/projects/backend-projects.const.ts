import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const BACKEND_PROJECTS: Project[] = [
  // Proyectos MVC
  {
    title: 'Gestión de Eventos',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['thymeleaf'],
      AVAILABLE_TECHNOLOGIES['sql'],
    ],
    imageUrl:
      '/assets/img/projects/backend/MVC/gestion-eventos/DESKTOP_GESTION-EVENTOS.png',
    githubUrl: 'https://github.com/usuario/gestion-eventos',
    category: 'backend',
    subcategory: 'MVC',
    status: 'completed',
    longDescription:
      'Sistema completo de gestión de eventos desarrollado con Spring Boot y Thymeleaf. Permite crear, administrar y gestionar eventos con funcionalidades de registro de participantes, control de capacidad, filtros avanzados y reportes. Incluye panel administrativo para gestión completa.',
    images: [
      '/assets/img/projects/backend/MVC/gestion-eventos/DESKTOP_GESTION-EVENTOS.png',
    ],
    demoImages: [
      '/assets/img/projects/backend/MVC/gestion-eventos/demo/admin_gestion-eventoss.png',
      '/assets/img/projects/backend/MVC/gestion-eventos/demo/admin_gestion-usuarios.png',
      '/assets/img/projects/backend/MVC/gestion-eventos/demo/admin_gestion-tipos.png',
      '/assets/img/projects/backend/MVC/gestion-eventos/demo/admin_gestion-perfiles.png',
      '/assets/img/projects/backend/MVC/gestion-eventos/demo/filtrar_eventos.png',
      '/assets/img/projects/backend/MVC/gestion-eventos/demo/mis-reservas.png',
    ],
    demoImageTitles: [
      'Panel Admin - Gestión de Eventos - Administración completa de eventos con creación, edición y control',
      'Panel Admin - Gestión de Usuarios - Control de cuentas, roles y permisos de usuarios',
      'Panel Admin - Gestión de Tipos - Configuración de categorías y tipos de eventos',
      'Panel Admin - Gestión de Perfiles - Administración de perfiles de usuario y configuraciones',
      'Filtrado de Eventos - Sistema de búsqueda y filtros avanzados para encontrar eventos',
      'Mis Reservas - Panel personal del usuario para gestionar sus reservas y participaciones',
    ],
    technicalDetails: [
      'Arquitectura MVC con Spring Boot',
      'Templates dinámicos con Thymeleaf',
      'Gestión completa de eventos y participantes',
      'Sistema de registro y control de capacidad',
      'Base de datos relacional con JPA/Hibernate',
      'Interfaz responsiva y amigable',
    ],
    challenges: [
      'Implementación de un sistema de reservas con control de capacidad en tiempo real',
      'Diseño de una interfaz administrativa intuitiva para gestión de múltiples entidades',
      'Optimización de consultas para el filtrado eficiente de eventos por múltiples criterios',
      'Gestión de estados de reservas y notificaciones automáticas a usuarios',
    ],
  },
  {
    title: 'Cajero Virtual',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['thymeleaf'],
      AVAILABLE_TECHNOLOGIES['sql'],
    ],
    imageUrl: '/assets/img/projects/backend/MVC/cajero/DESKTOP_cajero.png',
    githubUrl: 'https://github.com/usuario/cajero-virtual',
    category: 'backend',
    subcategory: 'MVC',
    status: 'completed',
    longDescription:
      'Aplicación web de cajero virtual desarrollada con Spring Boot, JPA y Thymeleaf. Permite a los usuarios realizar operaciones bancarias como ingreso, retiro y transferencia de dinero, así como consultar su historial de movimientos. Los administradores pueden gestionar cuentas y dar de alta nuevos usuarios.',
    images: ['/assets/img/projects/backend/MVC/cajero/DESKTOP_cajero.png'],
    demoImages: [
      '/assets/img/projects/backend/MVC/cajero/demo/home.png',
      '/assets/img/projects/backend/MVC/cajero/demo/usuario_retirar-dinero.png',
      '/assets/img/projects/backend/MVC/cajero/demo/usuario_ingresar-dinero.png',
      '/assets/img/projects/backend/MVC/cajero/demo/usuario_realizar-transferencia.png',
      '/assets/img/projects/backend/MVC/cajero/demo/usuario_movimientos.png',
      '/assets/img/projects/backend/MVC/cajero/demo/admin_alta-usuario.png',
      '/assets/img/projects/backend/MVC/cajero/demo/admin_listar-usuarios.png',
    ],
    demoImageTitles: [
      'Página Principal - Interfaz de inicio del cajero virtual con opciones principales',
      'Retirar Dinero - Funcionalidad para realizar retiros con validación de saldo',
      'Ingresar Dinero - Sistema de depósitos con confirmación de transacción',
      'Realizar Transferencia - Transferencias entre cuentas con validaciones de seguridad',
      'Historial de Movimientos - Consulta detallada de todas las transacciones realizadas',
      'Admin - Alta de Usuario - Panel administrativo para crear nuevas cuentas de usuario',
      'Admin - Listar Usuarios - Gestión y visualización de todos los usuarios del sistema',
    ],
    technicalDetails: [
      'Arquitectura MVC con Spring Boot y JPA',
      'Vistas interactivas mediante Thymeleaf',
      'Operaciones bancarias: ingreso, retiro y transferencia',
      'Historial de movimientos por usuario',
      'Gestión de roles: administrador y usuario',
      'Persistencia con base de datos relacional',
    ],
    challenges: [
      'Control de operaciones simultáneas sobre cuentas con validación de saldos',
      'Diseño de una interfaz clara que simule la experiencia de un cajero automático',
      'Gestión segura de transacciones entre usuarios',
      'Implementación de roles con permisos diferenciados (admin/user)',
    ],
  },
  {
    title: 'Gestión de excursiones',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['thymeleaf'],
      AVAILABLE_TECHNOLOGIES['sql'],
    ],
    imageUrl:
      '/assets/img/projects/backend/MVC/excursiones/DESKTOP_excursiones.png',
    githubUrl: 'https://github.com/usuario/gestion-excursiones',
    category: 'backend',
    subcategory: 'MVC',
    status: 'completed',
    longDescription:
      'Aplicación web desarrollada con Spring Boot, JPA y Thymeleaf para la gestión de excursiones turísticas. Permite administrar excursiones, guías y participantes desde una interfaz clara, con operaciones CRUD completas y control de capacidad.',
    images: [
      '/assets/img/projects/backend/MVC/excursiones/DESKTOP_excursiones.png',
    ],
    demoImages: [
      '/assets/img/projects/backend/MVC/excursiones/demo/listado-excursiones.png',
      '/assets/img/projects/backend/MVC/excursiones/demo/filtros-excursiones.png',
      '/assets/img/projects/backend/MVC/excursiones/demo/post-excursion.png',
    ],
    demoImageTitles: [
      'Listado de Excursiones - Vista completa del catálogo de excursiones disponibles con información detallada',
      'Filtros de Excursiones - Sistema de búsqueda y filtros avanzados para encontrar excursiones por destino, fecha y tipo',
      'Publicar Excursión - Panel administrativo para crear y publicar nuevas excursiones turísticas',
    ],
    technicalDetails: [
      'Arquitectura MVC basada en Spring Boot y JPA',
      'Interfaz generada con Thymeleaf para una experiencia fluida',
      'Gestión de excursiones, guías y participantes',
      'Sistema de reservas con control de capacidad',
      'Filtrado de excursiones por destino, tipo y fecha',
    ],
    challenges: [
      'Implementación de control de aforo en tiempo real para cada excursión',
      'Integración de un sistema flexible de filtrado de excursiones',
      'Desarrollo de panel administrativo para crear y administrar excursiones y guías',
      'Diseño de una experiencia de usuario clara tanto para admins como participantes',
    ],
  },
  // Proyectos API
  {
    title: 'Api Fisioterapia',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql'],
    ],
    imageUrl: '/assets/img/projects/backend/api/fisioterapia/DESKTOP_fisioterapia.png',
    githubUrl: 'https://github.com/usuario/api-fisioterapia',
    category: 'backend',
    subcategory: 'API',
    status: 'completed',
    longDescription:
      'API REST construida con Spring Boot para gestionar agendas de fisioterapeutas. Incluye operaciones CRUD para citas, validaciones, seguridad con JWT y pruebas unitarias con Mockito, garantizando autenticación segura y una gestión fiable de reservas.',
    images: ['/assets/img/projects/backend/api/fisioterapia/DESKTOP_fisioterapia.png'],
    technicalDetails: [
      'Arquitectura RESTful con Spring Boot',
      'CRUD completo para citas y agendas de fisioterapia',
      'Seguridad con autenticación JWT y validaciones de entrada',
      'Documentación de la API con Swagger',
      'Pruebas unitarias con JUnit y Mockito',
    ],
    challenges: [
      'Gestión de autenticación segura con JWT y control de sesiones',
      'Diseño de una estructura REST clara y mantenible',
      'Validación robusta de entradas y gestión de errores controlada',
      'Cobertura de pruebas con Mockito para garantizar fiabilidad de la API',
    ],
  },
  {
    title: 'Api Gestión de Comerciales',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['docker'],
      AVAILABLE_TECHNOLOGIES['sql'],
    ],
    imageUrl: '/assets/img/projects/backend/api/comerciales/DESKTOP_comerciales.png',
    githubUrl: 'https://github.com/usuario/api-comerciales',
    category: 'backend',
    subcategory: 'API',
    status: 'completed',
    longDescription:
      'API REST desarrollada con Spring Boot y MySQL para gestionar comerciales, clientes y pedidos. Permite realizar operaciones CRUD, obtener datos clave del negocio y asegurar la fiabilidad mediante pruebas con JUnit y Mockito.',
    images: ['/assets/img/projects/backend/api/comerciales/DESKTOP_comerciales.png'],
    technicalDetails: [
      'Arquitectura RESTful con Spring Boot',
      'Persistencia con base de datos MySQL',
      'CRUD completo para comerciales, clientes y pedidos',
      'Documentación de endpoints con Swagger',
      'Pruebas unitarias con JUnit y Mockito',
    ],
    challenges: [
      'Diseño de una API REST limpia y escalable',
      'Cobertura de pruebas con JUnit y Mockito',
      'Validación y manejo de errores uniforme en toda la API',
    ],
  },
  {
    title: 'API CRUD con TDD',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['graphql'],
      AVAILABLE_TECHNOLOGIES['sql'],
    ],
    imageUrl: '/assets/img/projects/backend/api/tdd/DESKTOP_TDD.png',
    githubUrl: 'https://github.com/usuario/api-tdd',
    category: 'backend',
    subcategory: 'API',
    status: 'completed',
    longDescription:
      'API REST desarrollada con Spring Boot aplicando TDD (Test-Driven Development). Gestiona datos mediante operaciones CRUD, permitiendo agregar, consultar, actualizar y eliminar registros de forma fiable y optimizada.',
    images: ['/assets/img/projects/backend/api/tdd/DESKTOP_TDD.png'],
    technicalDetails: [
      'Desarrollo guiado por pruebas (TDD) con Spring Boot',
      'CRUD completo con validaciones robustas',
      'Persistencia de datos con base de datos relacional',
      'Cobertura de pruebas con JUnit y Mockito',
    ],
    challenges: [
      'Diseño de pruebas antes de la implementación de cada funcionalidad (TDD)',
      'Cobertura completa de lógica de negocio y controladores con tests',
      'Validación de datos y manejo de errores coherente en todos los endpoints',
      'Desarrollo de una API limpia, mantenible y fácilmente testeable',
    ],
  },
];
