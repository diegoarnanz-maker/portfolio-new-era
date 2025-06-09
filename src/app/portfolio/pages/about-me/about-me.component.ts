import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategoryComponent } from '../../components/skill-category/skill-category.component';
import { SkillIconComponent } from '../../components/skill-icon/skill-icon.component';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { SkillIcon } from '../../../core/interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, SkillCategoryComponent, SkillIconComponent, TranslateModule],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  skillCategories = SKILL_CATEGORIES;
  
  // Todos los iconos juntos para móviles
  allSkills: SkillIcon[] = SKILL_CATEGORIES.flatMap(category => category.skills);

  constructor(
    private translateService: TranslateService,
    private sanitizer: DomSanitizer,
    private languageService: LanguageService
  ) {}

  getSafeHtml(key: string): SafeHtml {
    const translation = this.translateService.instant(key);
    return this.sanitizer.bypassSecurityTrustHtml(translation);
  }
} 