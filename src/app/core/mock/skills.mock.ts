import { SkillIcon } from '../interfaces/skill.interface';

export const FRONTEND_SKILLS: SkillIcon[] = [
  {
    name: 'Angular',
    color: 'red',
    iconPath: 'https://angular.io/assets/images/logos/angular/angular.svg',
    alt: 'Angular'
  },
  {
    name: 'Tailwind CSS',
    color: 'cyan',
    iconPath: '/assets/img/icons/tailwind.svg',
    alt: 'Tailwind CSS'
  },
];

export const BACKEND_SKILLS: SkillIcon[] = [
  {
    name: 'Spring Boot',
    color: 'green',
    iconPath: '/assets/img/icons/spring-boot.svg',
    alt: 'Spring Boot'
  },
  {
    name: '.NET',
    color: 'purple',
    iconPath: '/assets/img/icons/dotnet.svg',
    alt: '.NET'
  },
];

export const TOOLS_SKILLS: SkillIcon[] = [
  {
    name: 'SQL',
    color: 'blue',
    iconPath: '/assets/img/icons/sql.svg',
    alt: 'SQL'
  },
  {
    name: 'Postman',
    color: 'orange',
    iconPath: '/assets/img/icons/postman.svg',
    alt: 'Postman'
  },  
  {
    name: 'GitHub',
    color: 'gray',
    iconPath: '/assets/img/icons/github.svg',
    alt: 'GitHub'
  },
];

export const AI_SKILLS: SkillIcon[] = [
  {
    name: 'n8n',
    color: 'red',
    iconPath: '/assets/img/icons/n8n.svg',
    alt: 'n8n'
  },
  {
    name: 'Cursor',
    color: 'blue',
    iconPath: '/assets/img/icons/cursor.svg',
    alt: 'Cursor IDE'
  }
];

export interface SkillCategory {
  title: string;
  color: string;
  skills: SkillIcon[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    color: 'text-accent',
    skills: BACKEND_SKILLS,
  },
  {
    title: 'Frontend',
    color: 'action-default',
    skills: FRONTEND_SKILLS,
  },
  {
    title: 'Tools',
    color: 'action-hover',
    skills: TOOLS_SKILLS,
  },
  {
    title: 'IA',
    color: 'text-emerald-500',
    skills: AI_SKILLS,
  },
];
