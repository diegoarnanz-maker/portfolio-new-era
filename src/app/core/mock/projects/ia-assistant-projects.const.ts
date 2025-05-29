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
    liveUrl: 'https://voicebot.com',
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
    liveUrl: 'https://contentgen.com',
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
    category: 'ia_assistants',
    featured: false,
    status: 'planned',
  },
]; 