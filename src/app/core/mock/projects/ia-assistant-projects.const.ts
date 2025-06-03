import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const IA_ASSISTANT_PROJECTS: Project[] = [
  {
    title: '@assistan-agent',
    technologies: [AVAILABLE_TECHNOLOGIES['n8n']],
    imageUrl: '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
    category: 'ia_assistants',
    status: 'completed',
    longDescription:
      'Asistente personal basado en n8n que permite gestionar clientes, agendar reuniones y enviar correos electrónicos mediante comandos de chat. Utiliza inteligencia artificial con OpenAI y memoria contextual para ofrecer respuestas breves, automatizadas y precisas.',
    images: [
      '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
      '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
      '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
      '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
    ],
    technicalDetails: [
      'Construido con n8n y agentes LangChain',
      'Procesamiento de lenguaje natural con OpenAI GPT-4o-mini',
      'Memoria contextual para mantener conversaciones coherentes',
      'Acceso a Google Sheets para consultar información de clientes',
      'Automatización de reuniones con integración a Google Calendar',
      'Envío automático de correos con Gmail',
      'Respuestas acotadas a 150 caracteres para mayor claridad',
    ],
    challenges: [
      'Diseño de un flujo conversacional orientado a productividad real',
      'Integración fiable con servicios externos (Google Sheets, Gmail, Calendar)',
      'Control de contexto conversacional para mantener coherencia en múltiples tareas',
      'Implementación de un agente AI capaz de ejecutar acciones sobre herramientas conectadas',
      'Limitación intencional de longitud de respuesta para mayor claridad y precisión',
    ],
  },
];
