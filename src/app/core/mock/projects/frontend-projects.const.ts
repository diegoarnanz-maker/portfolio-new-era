import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const FRONTEND_PROJECTS: Project[] = [
  // Frontend - AGoodShop (Tienda online con carrito de compras)
  {
    title: 'AGoodShop',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/frontend/agoodshop/DESKTOP_agooodshop.png',
    githubUrl: 'https://github.com/diegoarnanz-maker/Agoodghop-ng',
    category: 'frontend',
    status: 'completed',
    longDescription:
      'AGoodShop es una aplicación frontend de tienda online desarrollada con Angular y Tailwind CSS. Permite explorar productos, ver detalles y gestionar un carrito de compras conectado a una API JSONBlob. Incluye diseño responsive optimizado para desktop, tablet y móvil, ofreciendo una experiencia fluida en todos los dispositivos.',
    images: [
      '/assets/img/projects/frontend/agoodshop/DESKTOP_agooodshop.png',
      '/assets/img/projects/frontend/agoodshop/TABLET_agoodshop.png',
      '/assets/img/projects/frontend/agoodshop/MOBILE_agoodshop.png',
    ],
    imageTitles: [
      'Vista Desktop - Interfaz principal de la tienda optimizada para pantallas grandes',
      'Vista Tablet - Diseño adaptativo para dispositivos táctiles medianos',
      'Vista Mobile - Experiencia móvil completamente responsive para compras',
    ],
    demoImages: [
      '/assets/img/projects/frontend/agoodshop/demo/home.png',
      '/assets/img/projects/frontend/agoodshop/demo/producto-detail.png',
      '/assets/img/projects/frontend/agoodshop/demo/carrito.png',
    ],
    demoImageTitles: [
      'Página Principal - Landing page con catálogo de productos y navegación intuitiva',
      'Detalle de Producto - Vista completa del producto con información detallada y opciones',
      'Carrito de Compras - Gestión de productos seleccionados y proceso de checkout',
    ],
    technicalDetails: [
      'Frontend desarrollado con Angular y Tailwind CSS',
      'Carrito de compras conectado a una API externa (JSONBlob)',
      'Navegación fluida entre páginas de catálogo, producto y carrito',
      'Persistencia del estado del carrito a través de llamadas HTTP',
      'Diseño responsive adaptado para desktop, tablet y móvil',
    ],
    challenges: [
      'Integración del carrito con una API externa sin backend propio',
      'Manejo de estado síncrono con operaciones CRUD en JSONBlob',
      'Diseño adaptativo que conserva la experiencia de usuario en distintos dispositivos',
    ],
  },
  // Frontend - Portfolio v.1 (Portfolio personal con diseño retro)
  {
    title: 'Portfolio v.1',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/frontend/portfolio/DESKTOP_portfolio.png',
    githubUrl: 'https://github.com/diegoarnanz-maker/portfolio',
    category: 'frontend',
    status: 'completed',
    longDescription:
      'Primer portfolio personal desarrollado con Angular y Tailwind CSS, con una estética retro inspirada en videojuegos clásicos. Muestra proyectos seleccionados mediante una interfaz responsive y modular, centrada en la exploración visual del trabajo frontend y backend realizado.',
    images: [
      '/assets/img/projects/frontend/portfolio/DESKTOP_portfolio.png',
      '/assets/img/projects/frontend/portfolio/TABLET_portfolio.png',
      '/assets/img/projects/frontend/portfolio/MOBILE_portfolio.png',
    ],
    imageTitles: [
      'Vista Desktop - Portfolio personal con diseño retro optimizado para pantallas grandes',
      'Vista Tablet - Diseño responsive del portfolio adaptado a dispositivos medianos',
      'Vista Mobile - Experiencia móvil del portfolio con navegación táctil optimizada',
    ],
    demoImages: [
      '/assets/img/projects/frontend/portfolio/demo/sobre-mi.png',
      '/assets/img/projects/frontend/portfolio/demo/proyectos-frontend.png',
      '/assets/img/projects/frontend/portfolio/demo/proyectos-backend.png',
      '/assets/img/projects/frontend/portfolio/demo/proyectos-fullstack.png',
      '/assets/img/projects/frontend/portfolio/demo/contacto.png',
    ],
    demoImageTitles: [
      'Sobre Mí - Sección personal con información profesional y habilidades',
      'Proyectos Frontend - Catálogo de aplicaciones frontend desarrolladas',
      'Proyectos Backend - Showcase de APIs y aplicaciones del lado servidor',
      'Proyectos Fullstack - Aplicaciones completas con frontend y backend integrados',
      'Contacto - Formulario y información de contacto profesional',
    ],
    technicalDetails: [
      'Desarrollado con Angular y Tailwind CSS',
      'Diseño retro inspirado en videojuegos clásicos',
      'Componentes standalone reutilizables para cada sección del portfolio',
      'Maquetación responsive adaptada a desktop, tablet y móvil',
      'Animaciones ligeras y estructura modular para facilitar mantenimiento',
      'Navegación fluida entre secciones con efectos visuales retro',
    ],
    challenges: [
      'Diseño de una estética coherente basada en elementos retro sin afectar la usabilidad',
      'Organización clara de proyectos con navegación intuitiva',
      'Implementación de estructura modular para facilitar futuras versiones',
      'Adaptación del diseño a múltiples dispositivos con consistencia visual',
      'Balance entre elementos visuales llamativos y profesionalismo',
    ],
  },
  // Frontend - Ensigna (E-commerce de ropa con API externa)
  {
    title: 'Ensigna',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/frontend/ensigna/DESKTOP_ensigna.png',
    githubUrl: 'https://github.com/diegoarnanz-maker/ensigna/tree/gh-pages',
    category: 'frontend',
    status: 'completed',
    longDescription:
      'ENSIGNA-ecommerce es una aplicación frontend desarrollada con Angular y Tailwind CSS que permite a los usuarios explorar prendas de ropa mediante una API externa. Integra formularios, sliders y cards dinámicas para ofrecer una experiencia de usuario efectiva y atractiva. El diseño es completamente responsive.',
    images: [
      '/assets/img/projects/frontend/ensigna/DESKTOP_ensigna.png',
      '/assets/img/projects/frontend/ensigna/TABLET_ensigna.png',
      '/assets/img/projects/frontend/ensigna/MOBILE_ensigna.png',
    ],
    imageTitles: [
      'Vista Desktop - Interfaz principal de Ensigna optimizada para pantallas grandes',
      'Vista Tablet - Diseño adaptativo de Ensigna para dispositivos táctiles medianos',
      'Vista Mobile - Experiencia móvil completamente responsive de Ensigna',
    ],
    demoImages: [
      '/assets/img/projects/frontend/ensigna/demo/lista-productos.png',
      '/assets/img/projects/frontend/ensigna/demo/sobre-nosotros.png',
      '/assets/img/projects/frontend/ensigna/demo/work-with-us.png',
      '/assets/img/projects/frontend/ensigna/demo/blog.png',
    ],
    demoImageTitles: [
      'Lista de Productos - Catálogo completo de productos disponibles en Ensigna',
      'Sobre Nosotros - Página informativa sobre la empresa y su misión',
      'Trabaja con Nosotros - Sección de oportunidades laborales y contacto',
      'Blog - Sección de noticias y artículos relacionados con la empresa',
    ],
    technicalDetails: [
      'Aplicación SPA desarrollada con Angular 17 (standalone)',
      'Estilos y diseño con Tailwind CSS para una UI moderna',
      'Integración con API externa para consumo de productos (JSONBlob)',
    ],
    challenges: [
      'Sincronización del catálogo con una API externa sin backend propio',
    ],
  },
  // Frontend - Pokédx App (Explorador de Pokémon primera generación)
  {
    title: 'Pokédex App',
    technologies: [AVAILABLE_TECHNOLOGIES['angular']],
    imageUrl: '/assets/img/projects/frontend/pokedex/demo/DESKTOP_pokedex.png',
    githubUrl: 'https://github.com/diegoarnanz-maker/pokedex-app',
    category: 'frontend',
    status: 'completed',
    longDescription:
      'Pokédex App es una aplicación frontend desarrollada con Angular que permite explorar un catálogo de Pokémon de la primera generación. Ideal para fans del universo Pokémon, ofrece una interfaz sencilla y visualmente atractiva, con datos obtenidos desde una API externa.',
    images: [
      '/assets/img/projects/frontend/pokedex/demo/DESKTOP_pokedex.png',
      '/assets/img/projects/frontend/pokedex/demo/TABLET_desktop.png',
      '/assets/img/projects/frontend/pokedex/demo/MOBILE_pokedex.png',
    ],
    imageTitles: [
      'Vista Desktop - Catálogo visual de Pokémon optimizado para pantallas grandes',
      'Vista Tablet - Diseño responsive adaptado a dispositivos medianos',
      'Vista Mobile - Exploración móvil de Pokémon con navegación táctil',
    ],
    technicalDetails: [
      'Desarrollada con Angular (standalone components)',
      'Consumo de datos desde API pública de Pokémon (PokéAPI)',
      'Interfaz responsive para una navegación fluida en todos los dispositivos',
      'Componentes reutilizables para listado y detalle de Pokémon',
      'Visualización de estadísticas y características de cada Pokémon',
    ],
    challenges: [
      'Adaptación de estructura de datos de la API externa (PokéAPI)',
      'Diseño visual atractivo respetando el estilo clásico de Pokémon',
      'Gestión de navegación entre lista y vista detallada de cada Pokémon',
      'Optimización de carga de imágenes y datos de múltiples Pokémon',
    ],
  },
  // Frontend - Series App (Catálogo de series de televisión)
  {
    title: 'Series App',
    technologies: [
      AVAILABLE_TECHNOLOGIES['angular'],
      AVAILABLE_TECHNOLOGIES['tailwind'],
    ],
    imageUrl: '/assets/img/projects/frontend/series/DESKTOP_series.png',
    githubUrl:
      'https://github.com/diegoarnanz-maker/netflix-clone-ng/tree/gh-pages',
    category: 'frontend',
    status: 'completed',
    longDescription:
      'Series App es una aplicación frontend desarrollada con Angular y SCSS que permite visualizar un catálogo de series de televisión a través de una API externa. Presenta un diseño sencillo pero atractivo',
    images: [
      '/assets/img/projects/frontend/series/DESKTOP_series.png',
      '/assets/img/projects/frontend/series/TABLET_series.png',
      '/assets/img/projects/frontend/series/MOBILE_series.png',
    ],
    imageTitles: [
      'Vista Desktop - Interfaz principal de Series App optimizada para pantallas grandes',
      'Vista Tablet - Diseño adaptativo de Series App para dispositivos táctiles medianos',
      'Vista Mobile - Experiencia móvil completamente responsive de Series App',
    ],
    demoImages: [
      '/assets/img/projects/frontend/series/demo/login.png',
      '/assets/img/projects/frontend/series/demo/explorar-series.png',
    ],
    demoImageTitles: [
      'Login - Sistema de autenticación de usuarios para acceder a la aplicación',
      'Explorar Series - Catálogo completo de series con filtros y búsqueda avanzada',
    ],
    technicalDetails: [
      'Consumo de datos desde API pública de series',
      'Diseño responsive para pantallas de distintos tamaños',
    ],
    challenges: [
      'Consumo y adaptación de datos desde una API externa',
      'Construcción de componentes reutilizables y estilizados',
    ],
  },
  // Frontend - Easy-task (Gestor de tareas)
  {
    title: 'Easy-task',
    technologies: [AVAILABLE_TECHNOLOGIES['angular']],
    imageUrl: '/assets/img/projects/frontend/easy-task/DESKTOP_easy-task.png',
    githubUrl: 'https://github.com/diegoarnanz-maker/easy-task',
    category: 'frontend',
    status: 'completed',
    longDescription:
      'Aplicación frontend desarrollada con Angular para la gestión de tareas. Permite a múltiples usuarios añadir, editar y eliminar tareas de forma sencilla, ofreciendo una interfaz limpia, intuitiva y responsive para mantener el control del trabajo personal o colaborativo.',
    images: [
      '/assets/img/projects/frontend/easy-task/DESKTOP_easy-task.png',
      '/assets/img/projects/frontend/easy-task/TABLET_easy-task.png',
      '/assets/img/projects/frontend/easy-task/MOBILE_easy-task.png',
    ],
    imageTitles: [
      'Vista Desktop - Gestor de tareas optimizado para pantallas grandes con vista completa',
      'Vista Tablet - Diseño responsive del gestor adaptado a dispositivos medianos',
      'Vista Mobile - Gestión móvil de tareas con navegación táctil optimizada',
    ],
    demoImages: ['/assets/img/projects/frontend/easy-task/demo/post-tarea.png'],
    demoImageTitles: [
      'Crear Tarea - Formulario para añadir nuevas tareas al sistema de gestión',
    ],
    technicalDetails: [
      'Desarrollada con Angular usando componentes standalone',
      'CRUD completo de tareas (crear, leer, editar, eliminar) por usuario',
      'Interfaz intuitiva y responsive adaptada a distintos dispositivos',
      'Sistema de gestión de estado local para persistencia de datos',
      'Formularios reactivos para la creación y edición de tareas',
      'Diseño limpio y minimalista enfocado en la productividad',
    ],
    challenges: [
      'Implementación de un sistema claro de gestión de tareas por usuario',
      'Diseño de una interfaz sencilla que priorice la experiencia de usuario',
      'Gestión eficiente del estado de las tareas sin backend',
      'Optimización de la usabilidad para diferentes dispositivos',
    ],
  },
];
