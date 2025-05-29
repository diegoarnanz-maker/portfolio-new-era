import { Experience } from "../interfaces/experience.interface";
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS_SKILLS } from "./skills.mock";

export const currentStatus: Experience = {
  id: 'current-status',
  title: '#OpenToWork',
  company: 'Madrid / Segovia / Teletrabajo',
  period: 'Actualidad',
  description: 'Explorando nuevas oportunidades y tecnologías. Disponible para nuevos proyectos y desafíos profesionales.',
  category: 'personal'
};

export const experiences: Experience[] = [
    {
      id: 'eurokaizen-practices',
      title: 'Backend .NET',
      company: 'EUROKAIZEN',
      period: 'Feb 2025 - May 2025 (370 h)',
      description: 'Desarrollo backend con .NET Core, gestión de bases de datos y APIs REST.',
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
      institution: 'Universidad UNIR',
      period: '2023 - 2025',
      description: 'Formación fullstack en tecnologías web modernas y desarrollo de aplicaciones.',
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
      institution: 'Udemy',
      period: '2023 - Actualidad',
      description: 'Aprendizaje continuo de nuevas tecnologías y desarrollo de proyectos personales.',
      stack: [
        FRONTEND_SKILLS.find(skill => skill.name === 'Tailwind CSS')!,
        TOOLS_SKILLS.find(skill => skill.name === 'Postman')!,
        TOOLS_SKILLS.find(skill => skill.name === 'GitHub')!
      ],
      category: 'personal'
    }
  ];
  