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

]; 