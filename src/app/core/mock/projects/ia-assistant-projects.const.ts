import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const IA_ASSISTANT_PROJECTS: Project[] = [
  {
    id: 'voice-bot',
    title: 'Asistente de Voz AI',
    description: 'Asistente por voz para tareas del día a día con integración a APIs externas.',
    shortDescription: 'Asistente de voz inteligente',
    technologies: [
      AVAILABLE_TECHNOLOGIES['n8n']
    ],
    imageUrl: '/assets/img/projects/voice-bot.jpg',
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
  }
]; 