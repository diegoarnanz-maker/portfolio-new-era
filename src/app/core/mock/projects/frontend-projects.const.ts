import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const FRONTEND_PROJECTS: Project[] = [
  // Frontend - AGoodShop (Tienda online)
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
];
