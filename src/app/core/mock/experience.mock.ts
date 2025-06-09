import { Experience } from "../interfaces";
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS_SKILLS } from "./skills.mock";

export const currentStatus: Experience = {
  id: 'current-status',
  title: '#OpenToWork',
  titleKey: 'experience.current.title',
  company: 'Madrid / Segovia / Teletrabajo',
  companyKey: 'experience.current.location',
  period: 'Actualidad',
  periodKey: 'experience.current.period',
  description: 'Explorando nuevas oportunidades y tecnologías. Disponible para nuevos proyectos y desafíos profesionales.',
  descriptionKey: 'experience.current.description',
  category: 'personal'
};

export const experiences: Experience[] = [
    {
      id: 'eurokaizen-practices',
      title: 'Backend .NET',
      titleKey: 'experience.eurokaizen.title',
      company: 'EUROKAIZEN',
      period: 'Feb 2025 - May 2025 (370 h)',
      periodKey: 'experience.eurokaizen.period',
      description: 'Desarrollo backend con .NET Core, gestión de bases de datos y APIs REST.',
      descriptionKey: 'experience.eurokaizen.description',
      stack: [
        BACKEND_SKILLS.find(skill => skill.name === '.NET')!,
        TOOLS_SKILLS.find(skill => skill.name === 'SQL')!,
        TOOLS_SKILLS.find(skill => skill.name === 'GitHub')!
      ],
      category: 'practices'
    },
    {
      id: 'daw-studies',
      title: 'Desarrollo de Aplicaciones Web',
      titleKey: 'experience.daw.title',
      institution: 'Universidad UNIR',
      institutionKey: 'experience.daw.institution',
      period: '2023 - 2025',
      periodKey: 'experience.daw.period',
      description: 'Formación fullstack en tecnologías web modernas y desarrollo de aplicaciones.',
      descriptionKey: 'experience.daw.description',
      stack: [
        FRONTEND_SKILLS.find(skill => skill.name === 'Angular')!,
        BACKEND_SKILLS.find(skill => skill.name === 'Spring Boot')!,
        TOOLS_SKILLS.find(skill => skill.name === 'SQL')!
      ],
      category: 'education'
    },
    {
      id: 'udemy-courses',
      title: 'Formación Autodidacta',
      titleKey: 'experience.autodidact.title',
      institution: 'Udemy',
      period: '2023 - Actualidad',
      periodKey: 'experience.autodidact.period',
      description: 'Aprendizaje continuo de nuevas tecnologías y desarrollo de proyectos personales.',
      descriptionKey: 'experience.autodidact.description',
      stack: [
        FRONTEND_SKILLS.find(skill => skill.name === 'Tailwind CSS')!,
        TOOLS_SKILLS.find(skill => skill.name === 'Postman')!,
        TOOLS_SKILLS.find(skill => skill.name === 'GitHub')!
      ],
      category: 'personal',
      courses: [
        'The Complete Agentic AI Engineering Course (2025)',
        'Curso n8n. Crea Agentes de IA Sin Programar',
        'Angular & Spring Boot: Creando Webapp Full Stack',
        'Universidad Java - Cero a Experto',
      ],
      coursesKeys: [
        'experience.autodidact.courses.agentic_ai',
        'experience.autodidact.courses.n8n',
        'experience.autodidact.courses.angular',
        'experience.autodidact.courses.java',
      ]
    }
  ];
  