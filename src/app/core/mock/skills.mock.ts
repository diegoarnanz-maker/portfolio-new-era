import { SkillIcon } from '../interfaces/skill.interface';

export const FRONTEND_SKILLS: SkillIcon[] = [
  {
    name: 'Angular',
    color: 'red',
    iconPath: 'https://angular.io/assets/images/logos/angular/angular.svg',
    alt: 'Angular',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
  {
    name: 'Tailwind CSS',
    color: 'cyan',
    iconPath: '/assets/img/icons/tailwind.svg',
    alt: 'Tailwind CSS',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
];

export const BACKEND_SKILLS: SkillIcon[] = [
  {
    name: 'Spring Boot',
    color: 'green',
    iconPath: '/assets/img/icons/spring-boot.svg',
    alt: 'Spring Boot',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
  {
    name: '.NET',
    color: 'purple',
    iconPath: '/assets/img/icons/dotnet.svg',
    alt: '.NET',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
];

export const TOOLS_SKILLS: SkillIcon[] = [
  {
    name: 'SQL',
    color: 'blue',
    iconPath: '/assets/img/icons/sql.svg',
    alt: 'SQL',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
  {
    name: 'Postman',
    color: 'orange',
    iconPath: '/assets/img/icons/postman.svg',
    alt: 'Postman',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },  
  {
    name: 'GitHub',
    color: 'gray',
    iconPath: '/assets/img/icons/github.svg',
    alt: 'GitHub',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
];

export const AI_SKILLS: SkillIcon[] = [
  {
    name: 'n8n',
    color: 'red',
    iconPath: '/assets/img/icons/n8n.svg',
    alt: 'n8n',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
  },
  {
    name: 'Cursor',
    color: 'blue',
    iconPath: '/assets/img/icons/cursor.svg',
    alt: 'Cursor IDE',
    imageDesktop: 'https://via.placeholder.com/800x500?text=Desktop',
    imageMobile: 'https://via.placeholder.com/800x500?text=Mobile',
    imageTablet: 'https://via.placeholder.com/800x500?text=Tablet',
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
    title: 'IA & Machine Learning',
    color: 'text-emerald-500',
    skills: AI_SKILLS,
  },
];
