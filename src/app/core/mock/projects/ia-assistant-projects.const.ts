import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';
import { IA_PLACEHOLDER_DESKTOP } from '../constants/placeholders.const';

export const IA_ASSISTANT_PROJECTS: Project[] = [
  {
    id: 'voice-bot',
    title: 'Asistente de Voz AI',
    description: 'Asistente por voz para tareas del día a día con integración a APIs externas.',
    shortDescription: 'Asistente de voz inteligente',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: IA_PLACEHOLDER_DESKTOP,
    imageDesktop: IA_PLACEHOLDER_DESKTOP,
    imageMobile: IA_PLACEHOLDER_DESKTOP,
    imageTablet: IA_PLACEHOLDER_DESKTOP,
    githubUrl: 'https://github.com/usuario/voice-bot',
    modalData: {
      title: 'Asistente de Voz con IA',
      description: 'Descubre las capacidades de procesamiento de voz y automatización inteligente.',
      images: [
        '/assets/img/projects/voice-bot/modal/voice-interface.jpg',
        '/assets/img/projects/voice-bot/modal/workflow-builder.jpg',
        '/assets/img/projects/voice-bot/modal/integrations.jpg',
        '/assets/img/projects/voice-bot/modal/analytics.jpg'
      ],
      features: [
        'Reconocimiento de voz en tiempo real',
        'Procesamiento de lenguaje natural',
        'Integración con APIs externas',
        'Workflows automatizados con n8n',
        'Respuestas contextuales inteligentes',
        'Soporte multiidioma'
      ]
    },
    category: 'ia_assistants',
    featured: true,
    status: 'completed',
  },
  {
    id: 'chat-helper',
    title: 'Asistente de Chat IA',
    description: 'Chat inteligente para integración en sitios web como ayuda técnica o de ventas.',
    shortDescription: 'Asistente de chat con IA',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: IA_PLACEHOLDER_DESKTOP,
    imageDesktop: IA_PLACEHOLDER_DESKTOP,
    imageMobile: IA_PLACEHOLDER_DESKTOP,
    imageTablet: IA_PLACEHOLDER_DESKTOP,
    githubUrl: 'https://github.com/usuario/chat-helper',
    modalData: {
      title: 'Asistente de Chat Inteligente',
      description: 'Explora las funcionalidades de chat automatizado y soporte al cliente.',
      images: [
        '/assets/img/projects/chat-helper/modal/chat-interface.jpg',
        '/assets/img/projects/chat-helper/modal/knowledge-base.jpg',
        '/assets/img/projects/chat-helper/modal/training-panel.jpg',
        '/assets/img/projects/chat-helper/modal/integration-widget.jpg'
      ],
      features: [
        'Chat widget embebible',
        'Base de conocimiento dinámica',
        'Entrenamiento con conversaciones',
        'Escalado a agentes humanos',
        'Analytics de conversaciones',
        'Personalización de marca'
      ]
    },
    category: 'ia_assistants',
    featured: false,
    status: 'in-progress',
  },
  {
    id: 'document-analyzer',
    title: 'Analizador de Documentos IA',
    description: 'Sistema de análisis automático de documentos con extracción de datos y clasificación inteligente.',
    shortDescription: 'Analizador de documentos con IA',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: IA_PLACEHOLDER_DESKTOP,
    imageDesktop: IA_PLACEHOLDER_DESKTOP,
    imageMobile: IA_PLACEHOLDER_DESKTOP,
    imageTablet: IA_PLACEHOLDER_DESKTOP,
    githubUrl: 'https://github.com/usuario/document-analyzer',
    modalData: {
      title: 'Analizador de Documentos con IA',
      description: 'Conoce las capacidades de OCR, extracción de datos y clasificación automática.',
      images: [
        '/assets/img/projects/document-analyzer/modal/upload-interface.jpg',
        '/assets/img/projects/document-analyzer/modal/ocr-processing.jpg',
        '/assets/img/projects/document-analyzer/modal/data-extraction.jpg',
        '/assets/img/projects/document-analyzer/modal/classification.jpg'
      ],
      features: [
        'OCR avanzado con múltiples idiomas',
        'Extracción de datos estructurados',
        'Clasificación automática de documentos',
        'Validación de datos extraídos',
        'Exportación a múltiples formatos',
        'API RESTful para integración'
      ]
    },
    category: 'ia_assistants',
    featured: true,
    status: 'completed',
  },
  {
    id: 'code-reviewer',
    title: 'Revisor de Código IA',
    description: 'Herramienta de revisión automática de código con sugerencias de mejora y detección de bugs.',
    shortDescription: 'Revisor automático de código',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: IA_PLACEHOLDER_DESKTOP,
    imageDesktop: IA_PLACEHOLDER_DESKTOP,
    imageMobile: IA_PLACEHOLDER_DESKTOP,
    imageTablet: IA_PLACEHOLDER_DESKTOP,
    githubUrl: 'https://github.com/usuario/code-reviewer',
    modalData: {
      title: 'Revisor de Código con IA',
      description: 'Descubre las capacidades de análisis estático y sugerencias inteligentes.',
      images: [
        '/assets/img/projects/code-reviewer/modal/code-analysis.jpg',
        '/assets/img/projects/code-reviewer/modal/suggestions.jpg',
        '/assets/img/projects/code-reviewer/modal/security-scan.jpg',
        '/assets/img/projects/code-reviewer/modal/reports.jpg'
      ],
      features: [
        'Análisis estático de código',
        'Detección de vulnerabilidades',
        'Sugerencias de optimización',
        'Integración con Git workflows',
        'Reportes de calidad detallados',
        'Soporte para 20+ lenguajes'
      ]
    },
    category: 'ia_assistants',
    featured: false,
    status: 'in-progress',
  },
  {
    id: 'content-generator',
    title: 'Generador de Contenido IA',
    description: 'Plataforma para generar contenido automático para blogs, redes sociales y marketing.',
    shortDescription: 'Generador de contenido automático',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: IA_PLACEHOLDER_DESKTOP,
    imageDesktop: IA_PLACEHOLDER_DESKTOP,
    imageMobile: IA_PLACEHOLDER_DESKTOP,
    imageTablet: IA_PLACEHOLDER_DESKTOP,
    githubUrl: 'https://github.com/usuario/content-generator',
    modalData: {
      title: 'Generador de Contenido con IA',
      description: 'Explora las herramientas de generación automática de contenido marketing.',
      images: [
        '/assets/img/projects/content-generator/modal/content-types.jpg',
        '/assets/img/projects/content-generator/modal/editor.jpg',
        '/assets/img/projects/content-generator/modal/templates.jpg',
        '/assets/img/projects/content-generator/modal/scheduling.jpg'
      ],
      features: [
        'Generación de posts para redes sociales',
        'Artículos de blog automatizados',
        'Plantillas personalizables',
        'Programación de publicaciones',
        'Optimización SEO automática',
        'Análisis de engagement'
      ]
    },
    category: 'ia_assistants',
    featured: true,
    status: 'completed',
  },
  {
    id: 'smart-scheduler',
    title: 'Planificador Inteligente IA',
    description: 'Sistema de planificación automática de tareas y eventos con optimización de tiempo.',
    shortDescription: 'Planificador inteligente de tareas',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: IA_PLACEHOLDER_DESKTOP,
    imageDesktop: IA_PLACEHOLDER_DESKTOP,
    imageMobile: IA_PLACEHOLDER_DESKTOP,
    imageTablet: IA_PLACEHOLDER_DESKTOP,
    githubUrl: 'https://github.com/usuario/smart-scheduler',
    modalData: {
      title: 'Planificador Inteligente con IA',
      description: 'Conoce las capacidades de optimización automática de horarios y tareas.',
      images: [
        '/assets/img/projects/smart-scheduler/modal/calendar-view.jpg',
        '/assets/img/projects/smart-scheduler/modal/ai-suggestions.jpg',
        '/assets/img/projects/smart-scheduler/modal/optimization.jpg',
        '/assets/img/projects/smart-scheduler/modal/integrations.jpg'
      ],
      features: [
        'Optimización automática de horarios',
        'Sugerencias inteligentes de tareas',
        'Integración con calendarios externos',
        'Análisis de productividad',
        'Recordatorios contextuales',
        'Sincronización multi-dispositivo'
      ]
    },
    category: 'ia_assistants',
    featured: false,
    status: 'planned',
  },
]; 