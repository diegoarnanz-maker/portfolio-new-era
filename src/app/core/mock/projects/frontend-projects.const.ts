import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';
import { 
  FRONTEND_PLACEHOLDER_DESKTOP, 
  FRONTEND_PLACEHOLDER_TABLET, 
  FRONTEND_PLACEHOLDER_MOBILE 
} from '../constants/placeholders.const';

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
    imageDesktop: FRONTEND_PLACEHOLDER_DESKTOP,
    imageMobile: FRONTEND_PLACEHOLDER_MOBILE,
    imageTablet: FRONTEND_PLACEHOLDER_TABLET,
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
  },
  {
    id: 'mobile-app',
    title: 'Aplicación Móvil',
    description: 'Aplicación móvil híbrida desarrollada con Ionic y Angular para gestión de tareas.',
    shortDescription: 'App móvil híbrida con Ionic',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/mobile.jpg',
    imageDesktop: FRONTEND_PLACEHOLDER_DESKTOP,
    imageMobile: FRONTEND_PLACEHOLDER_MOBILE,
    imageTablet: FRONTEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/mobile-app',
    modalData: {
      title: 'Aplicación Móvil Híbrida',
      description: 'Descubre la experiencia móvil nativa desarrollada con Ionic y Angular.',
      images: [
        '/assets/img/projects/mobile-app/modal/home-screen.jpg',
        '/assets/img/projects/mobile-app/modal/task-list.jpg',
        '/assets/img/projects/mobile-app/modal/task-detail.jpg',
        '/assets/img/projects/mobile-app/modal/offline-mode.jpg'
      ],
      features: [
        'Interfaz nativa con Ionic',
        'Sincronización offline/online',
        'Notificaciones push',
        'Gestos táctiles intuitivos',
        'Cámara y galería integradas',
        'Almacenamiento local seguro'
      ]
    },
    category: 'frontend',
    featured: false,
    status: 'planned',
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Tracker',
    description: 'Aplicación para seguimiento de criptomonedas con gráficos en tiempo real, alertas de precio y portfolio personal.',
    shortDescription: 'Tracker de criptomonedas en tiempo real',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/crypto-tracker.jpg',
    imageDesktop: FRONTEND_PLACEHOLDER_DESKTOP,
    imageMobile: FRONTEND_PLACEHOLDER_MOBILE,
    imageTablet: FRONTEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/crypto-tracker',
    modalData: {
      title: 'Crypto Tracker en Tiempo Real',
      description: 'Explora el seguimiento avanzado de criptomonedas con análisis técnico.',
      images: [
        '/assets/img/projects/crypto-tracker/modal/market-overview.jpg',
        '/assets/img/projects/crypto-tracker/modal/coin-detail.jpg',
        '/assets/img/projects/crypto-tracker/modal/portfolio.jpg',
        '/assets/img/projects/crypto-tracker/modal/alerts.jpg'
      ],
      features: [
        'Datos en tiempo real de múltiples exchanges',
        'Gráficos de velas interactivos',
        'Portfolio personal con P&L',
        'Alertas de precio personalizables',
        'Análisis técnico avanzado',
        'Watchlist personalizable'
      ]
    },
    category: 'frontend',
    featured: true,
    status: 'completed',
  },
  {
    id: 'weather-app',
    title: 'Aplicación del Clima',
    description: 'App del clima con pronósticos detallados, mapas interactivos y notificaciones de alertas meteorológicas.',
    shortDescription: 'App del clima con mapas interactivos',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/weather-app.jpg',
    imageDesktop: FRONTEND_PLACEHOLDER_DESKTOP,
    imageMobile: FRONTEND_PLACEHOLDER_MOBILE,
    imageTablet: FRONTEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/weather-app',
    modalData: {
      title: 'Aplicación Meteorológica Avanzada',
      description: 'Conoce las funcionalidades de pronóstico y mapas meteorológicos interactivos.',
      images: [
        '/assets/img/projects/weather-app/modal/current-weather.jpg',
        '/assets/img/projects/weather-app/modal/forecast.jpg',
        '/assets/img/projects/weather-app/modal/radar-map.jpg',
        '/assets/img/projects/weather-app/modal/alerts.jpg'
      ],
      features: [
        'Pronóstico de 7 días detallado',
        'Mapas de radar en tiempo real',
        'Alertas meteorológicas automáticas',
        'Geolocalización automática',
        'Múltiples ubicaciones guardadas',
        'Widgets personalizables'
      ]
    },
    category: 'frontend',
    featured: false,
    status: 'completed',
  },
  {
    id: 'music-player',
    title: 'Reproductor de Música',
    description: 'Reproductor web con playlists personalizadas, ecualizador, modo offline y sincronización en la nube.',
    shortDescription: 'Reproductor de música web avanzado',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/music-player.jpg',
    imageDesktop: FRONTEND_PLACEHOLDER_DESKTOP,
    imageMobile: FRONTEND_PLACEHOLDER_MOBILE,
    imageTablet: FRONTEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/music-player',
    modalData: {
      title: 'Reproductor de Música Avanzado',
      description: 'Descubre las funcionalidades de reproducción y gestión musical.',
      images: [
        '/assets/img/projects/music-player/modal/player-interface.jpg',
        '/assets/img/projects/music-player/modal/playlist-manager.jpg',
        '/assets/img/projects/music-player/modal/equalizer.jpg',
        '/assets/img/projects/music-player/modal/library.jpg'
      ],
      features: [
        'Reproductor con controles avanzados',
        'Ecualizador de 10 bandas',
        'Playlists inteligentes',
        'Modo offline con cache',
        'Visualizador de espectro',
        'Sincronización en la nube'
      ]
    },
    category: 'frontend',
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'code-editor',
    title: 'Editor de Código Online',
    description: 'Editor de código colaborativo en tiempo real con syntax highlighting, autocompletado y ejecución de código.',
    shortDescription: 'Editor de código colaborativo',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/code-editor.jpg',
    imageDesktop: FRONTEND_PLACEHOLDER_DESKTOP,
    imageMobile: FRONTEND_PLACEHOLDER_MOBILE,
    imageTablet: FRONTEND_PLACEHOLDER_TABLET,
    githubUrl: 'https://github.com/usuario/code-editor',
    modalData: {
      title: 'Editor de Código Colaborativo',
      description: 'Explora las capacidades de edición y colaboración en tiempo real.',
      images: [
        '/assets/img/projects/code-editor/modal/editor-interface.jpg',
        '/assets/img/projects/code-editor/modal/collaboration.jpg',
        '/assets/img/projects/code-editor/modal/terminal.jpg',
        '/assets/img/projects/code-editor/modal/file-explorer.jpg'
      ],
      features: [
        'Syntax highlighting para 50+ lenguajes',
        'Autocompletado inteligente',
        'Colaboración en tiempo real',
        'Terminal integrado',
        'Explorador de archivos',
        'Ejecución de código en sandbox'
      ]
    },
    category: 'frontend',
    featured: false,
    status: 'planned',
  },
]; 