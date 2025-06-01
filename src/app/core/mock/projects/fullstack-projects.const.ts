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
      images: [
        '/assets/img/projects/fullstack/indimetra/DESKTOP_indimetra.png',
        '/assets/img/projects/fullstack/indimetra/TABLET_indimetra.png',
        '/assets/img/projects/fullstack/indimetra/MOBILE_indimetra.png'
      ],
      features: [
        'Interfaz inmersiva para visualización de cortometrajes',
        'Sistema de interacción en tiempo real',
        'Diseño responsive optimizado para todos los dispositivos',
        'Backend robusto con Spring Boot',
        'Gestión de contenido multimedia',
        'Experiencia de usuario fluida y moderna'
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
      images: [
        '/assets/img/projects/fullstack/series/DESKTOP_series.png',
        '/assets/img/projects/fullstack/series/TABLET_series.png',
        '/assets/img/projects/fullstack/series/MOBILE_series.png'
      ],
      features: [
        'Interfaz inmersiva para visualización de series',
        'Sistema de interacción en tiempo real',
        'Diseño responsive optimizado para todos los dispositivos',
        'Backend robusto con Spring Boot',
        'Gestión de contenido multimedia',
        'Experiencia de usuario fluida y moderna'
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
      images: [
        '/assets/img/projects/fullstack/talentHub/DESKTOP_talenthub.png',
        '/assets/img/projects/fullstack/talentHub/TABLET_talenthub.png',
        '/assets/img/projects/fullstack/talentHub/MOBILE_talenhub.png'
      ],
      features: [
        'Interfaz de usuario intuitiva y fácil de usar',
        'Funcionalidades de autenticación y autorización',
        'Gestión de usuarios con roles y permisos',
        'Sistema de notificaciones',
        'Backend robusto con Spring Boot',
        'Experiencia de usuario fluida y moderna'
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
      images: [
        '/assets/img/projects/fullstack/manejo-usuarios/DESKTOP_manejo-usuarios.png',
        '/assets/img/projects/fullstack/manejo-usuarios/TABLET_manejo-usuarios.png',
        '/assets/img/projects/fullstack/manejo-usuarios/MOBILE_manejo-usuarios.png'
      ],
      features: [
        'Interfaz de usuario intuitiva y fácil de usar',
        'Funcionalidades de autenticación y autorización',
        'Gestión de usuarios con roles y permisos',
        'Sistema de notificaciones',
        'Backend robusto con Spring Boot',
        'Experiencia de usuario fluida y moderna'
      ]
    },
    category: 'fullstack',
    featured: true,
    status: 'completed',
  },

]; 