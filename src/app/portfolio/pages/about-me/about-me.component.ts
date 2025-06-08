import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategoryComponent } from '../../components/skill-category/skill-category.component';
import { SkillIconComponent } from '../../components/skill-icon/skill-icon.component';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlDirective } from '../../../shared/directives/safe-html.directive';
import { SkillIcon } from '../../../core/interfaces/skill.interface';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, SkillCategoryComponent, SkillIconComponent, TranslateModule, SafeHtmlDirective],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  skillCategories = SKILL_CATEGORIES;
  
  // Todos los iconos juntos para móviles
  allSkills: SkillIcon[] = SKILL_CATEGORIES.flatMap(category => category.skills);
} 