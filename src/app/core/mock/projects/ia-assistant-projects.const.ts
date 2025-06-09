import { Project } from '../../interfaces';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const IA_ASSISTANT_PROJECTS: Project[] = [
  //@mi-asistente-personal
  {
    title: 'AI career conversation',
    technologies: [
      AVAILABLE_TECHNOLOGIES['python'],
      AVAILABLE_TECHNOLOGIES['openai'],
    ],
    imageUrl:
      '/assets/img/projects/ia_assistants/ai_career_conversation/DESKTOP_ai_career_conversation.png',
    demoUrl: 'https://huggingface.co/spaces/diegodev96/mi-asistente-personal',
    category: 'ia_assistants',
    aiEngine: 'python',
    status: 'completed',
    longDescription:
      'Asistente personal conversacional que actúa como Diego Arnanz Lozano. Integra OpenAI GPT-4o-mini y Gradio para responder sobre su perfil profesional, experiencia y habilidades, con acceso a CV, contexto profesional y FAQ almacenados en JSON y PDF.',
    images: [
      '/assets/img/projects/ia_assistants/ai_career_conversation/DESKTOP_ai_career_conversation.png',
    ],
    imageTitles: ['Workflow n8n - AI Career Conversation'],
    demoImages: [
      '/assets/img/projects/ia_assistants/ai_career_conversation/demo/pregunta-estudios.png',
      '/assets/img/projects/ia_assistants/ai_career_conversation/demo/pregunta-experiencia-laboral.png',
      '/assets/img/projects/ia_assistants/ai_career_conversation/demo/pregunta-proyectos.png',
      '/assets/img/projects/ia_assistants/ai_career_conversation/demo/por-que-contratar.png',
      '/assets/img/projects/ia_assistants/ai_career_conversation/demo/parte-1-envio-email.png',
      '/assets/img/projects/ia_assistants/ai_career_conversation/demo/parte-2-envio-email.png',
    ],
    demoImageTitles: [
      'Consulta sobre Formación Académica',
      'Consulta sobre Experiencia Laboral',
      'Consulta sobre Proyectos Realizados',
      'Consulta sobre Por Qué Contratar',
      'Proceso de Envío de Email - Parte 1',
      'Proceso de Envío de Email - Parte 2',
    ],
    technicalDetails: [
      'Construido con Python, OpenAI GPT-4o-mini y Gradio',
      'Procesamiento de lenguaje natural con system prompts especializados',
      'Memoria contextual para mantener conversaciones coherentes',
      'Acceso a datos estructurados: CV JSON, contexto profesional y FAQ',
      'Lectura automática de perfil LinkedIn desde PDF con PyPDF',
      'Sistema de herramientas (Function Calling) para registro de leads y emails',
      'Envío directo de correos con configuración SMTP personalizable',
      'Resumen inteligente de respuestas largas limitadas a 400 caracteres',
      'Inferencia automática de asuntos de email basada en contexto',
      'Interfaz web responsive con chat en tiempo real',
    ],
    challenges: [
      'Diseño de un system prompt que capture fielmente la personalidad profesional',
      'Implementación de resumen inteligente con IA para mantener información esencial',
      'Integración de múltiples fuentes de datos (JSON, PDF) en contexto unificado',
      'Sistema de Function Calling para acciones específicas (emails, registro de contactos)',
      'Control de longitud de respuesta con fallback inteligente sin cortar palabras',
      'Manejo de patrones flexibles para detección de emails y mensajes del usuario',
      'Configuración modular y escalable con separación de responsabilidades',
    ],
  },
  // @gimnasio-agent
  {
    title: 'Gimnasio-agent',
    technologies: [AVAILABLE_TECHNOLOGIES['n8n']],
    imageUrl:
      '/assets/img/projects/ia_assistants/gimnasio-agent/DESKTOP_workflow.png',
    category: 'ia_assistants',
    aiEngine: 'n8n',
    status: 'completed',
    longDescription:
      'Asistente inteligente desarrollado en n8n para la gestión de un gimnasio. Permite a los usuarios consultar actividades disponibles, verificar su perfil mediante email y realizar reservas a través de chat conversacional. Utiliza inteligencia artificial con OpenAI, integra memoria contextual y accede a Airtable para gestionar miembros y eventos del gimnasio.',
    images: [
      '/assets/img/projects/ia_assistants/gimnasio-agent/DESKTOP_workflow.png',
    ],
    imageTitles: ['Workflow n8n - Sistema de Gestión de Gimnasio'],
    demoImages: [
      '/assets/img/projects/ia_assistants/gimnasio-agent/demo/flujo-chat-reserva.png',
      '/assets/img/projects/ia_assistants/gimnasio-agent/demo/rol-asistente.png',
      '/assets/img/projects/ia_assistants/gimnasio-agent/demo/asignacion-evento-usuario.png',
      '/assets/img/projects/ia_assistants/gimnasio-agent/demo/paso1-splittear.png',
    ],
    demoImageTitles: [
      'Flujo de Chat - Proceso de Reserva',
      'Configuración del Rol del Asistente de Gimnasio',
      'Asignación de Evento a Usuario',
      'División del Flujo - Gestión de Consultas',
    ],
    technicalDetails: [
      'Desarrollado en n8n con nodos personalizados y agente LangChain',
      'Comprensión de lenguaje natural mediante OpenAI GPT-4o-mini',
      'Memoria contextual para mantener conversaciones coherentes',
      'Integración con Airtable para la gestión de miembros y eventos',
      'Automatización de reservas con actualización directa en la base de datos',
      'Capacidad de filtrar y recuperar información personalizada según email del usuario',
      'Sistema de validación de horarios y disponibilidad de clases',
      'Interfaz conversacional natural para consultas sobre actividades del gimnasio',
    ],
    challenges: [
      'Diseñar un agente conversacional que actúe como recepcionista virtual de gimnasio',
      'Evitar solicitudes redundantes como repetir el email si ya está en memoria',
      'Implementar lógica condicional para validar reservas según horario y evento',
      'Integrar acciones complejas como reservas y búsquedas sin romper el flujo natural de conversación',
      'Gestión eficiente de la base de datos de miembros y clases disponibles',
      'Manejo de conflictos de horarios y capacidad máxima de clases',
    ],
  },
  // @assistan-agent
  {
    title: 'Assistan-agent',
    technologies: [AVAILABLE_TECHNOLOGIES['n8n']],
    imageUrl:
      '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
    category: 'ia_assistants',
    aiEngine: 'n8n',
    status: 'completed',
    longDescription:
      'Asistente personal basado en n8n que permite gestionar clientes, agendar reuniones y enviar correos electrónicos mediante comandos de chat. Utiliza inteligencia artificial con OpenAI y memoria contextual para ofrecer respuestas breves, automatizadas y precisas.',
    images: [
      '/assets/img/projects/ia_assistants/assistan-agent/DESKTOP_assistan-agent.png',
    ],
    imageTitles: ['Workflow n8n'],
    demoImages: [
      '/assets/img/projects/ia_assistants/assistan-agent/demo/rol-asistente.png',
      '/assets/img/projects/ia_assistants/assistan-agent/demo/1-chat-interaccion.png',
      '/assets/img/projects/ia_assistants/assistan-agent/demo/2-calendario.png',
      '/assets/img/projects/ia_assistants/assistan-agent/demo/3-gmail.png',
    ],
    demoImageTitles: [
      'Configuración del Rol del Asistente',
      'Interacción por Chat - Solicitud de Cliente',
      'Automatización de Calendario - Agendado de Reunión',
      'Envío Automático de Email - Confirmación',
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
  // @Ecommerce-agent
  {
    title: 'Ecommerce-agent',
    technologies: [AVAILABLE_TECHNOLOGIES['n8n']],
    imageUrl:
      '/assets/img/projects/ia_assistants/ecommerce-agent/DESKTOP_ecommerce.png',
    category: 'ia_assistants',
    aiEngine: 'n8n',
    status: 'completed',
    longDescription:
      'Agente conversacional inteligente para ecommerce desarrollado con n8n. Permite responder dudas sobre productos y el funcionamiento de la tienda online utilizando información almacenada en Google Sheets y un vector store. Puede compartir enlaces directos de compra y mantiene el contexto de la conversación para mejorar la experiencia del cliente.',
    images: [
      '/assets/img/projects/ia_assistants/ecommerce-agent/DESKTOP_ecommerce.png',
    ],
    imageTitles: ['Workflow n8n'],
    demoImages: [
      '/assets/img/projects/ia_assistants/ecommerce-agent/demo/rol-asistente.png',
      '/assets/img/projects/ia_assistants/ecommerce-agent/demo/interaccion-chat.png',
    ],
    demoImageTitles: [
      'Configuración de Rol del Agente',
      'Consulta de Productos - Interacción con Cliente',
    ],
    technicalDetails: [
      'Desarrollado con n8n y agentes LangChain',
      'Procesamiento de lenguaje natural con OpenAI GPT-4o-mini',
      'Uso de Pinecone como vector store con embeddings de OpenAI',
      'Consulta de productos en tiempo real desde Google Sheets',
      'Respuestas contextualizadas gracias a memoria temporal',
      'Diseño de flujo orientado a ecommerce con lógica de ventas',
    ],
    challenges: [
      'Diseño de un agente capaz de consultar productos y documentación de forma coherente',
      'Construcción de un vector store funcional para respuestas semánticas desde documentos',
      'Manejo eficiente de memoria contextual en entornos conversacionales',
      'Generación de respuestas naturales que incluyen hipervínculos de compra',
      'Control de longitud y claridad para mejorar la experiencia del usuario final',
    ],
  },
];
