import { SkillIcon } from './skill.interface';

export interface Experience {
    id: string;
    title: string;
    titleKey?: string;
    company?: string;
    companyKey?: string;
    institution?: string;
    institutionKey?: string;
    period: string;
    periodKey?: string;
    description: string;
    descriptionKey?: string;
    stack?: SkillIcon[];
    category: 'practices' | 'education' | 'personal';
    courses?: string[];
    coursesKeys?: string[];
}