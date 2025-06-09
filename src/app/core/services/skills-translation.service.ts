import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language.service';
import { SkillCategory } from '../mock/skills.mock';

@Injectable({
  providedIn: 'root'
})
export class SkillsTranslationService {
  private languageService = inject(LanguageService);

  getTranslatedSkillCategories(categories: SkillCategory[]): SkillCategory[] {
    return categories.map(category => ({
      ...category,
      title: this.getTranslatedCategoryTitle(category.title)
    }));
  }

  private getTranslatedCategoryTitle(title: string): string {
    const titleMap: { [key: string]: string } = {
      'Backend': this.languageService.getTranslation('skills.categories.backend'),
      'Frontend': this.languageService.getTranslation('skills.categories.frontend'),
      'IA': this.languageService.getTranslation('skills.categories.ia'),
      'Tools': this.languageService.getTranslation('skills.categories.tools'),
    };

    return titleMap[title] || title;
  }
} 