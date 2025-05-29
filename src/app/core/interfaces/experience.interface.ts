import { SkillIcon } from './skill.interface';

export interface Experience {
    id: string;
    title: string;
    company?: string;
    institution?: string;
    period: string;
    description: string;
    stack?: SkillIcon[];
    category: 'practices' | 'education' | 'personal';
  }