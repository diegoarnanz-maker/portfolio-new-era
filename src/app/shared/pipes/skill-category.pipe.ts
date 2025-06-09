import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Pipe({
  name: 'skillCategory',
  standalone: true,
  pure: false // Para que se actualice cuando cambie el idioma
})
export class SkillCategoryPipe implements PipeTransform {
  private languageService = inject(LanguageService);

  transform(categoryTitle: string): string {
    const titleMap: { [key: string]: string } = {
      'Backend': 'skills.categories.backend',
      'Frontend': 'skills.categories.frontend',
      'IA': 'skills.categories.ia',
      'Tools': 'skills.categories.tools',
    };

    const translationKey = titleMap[categoryTitle];
    if (translationKey) {
      return this.languageService.getTranslation(translationKey);
    }

    return categoryTitle;
  }
} 