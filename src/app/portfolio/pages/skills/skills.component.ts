import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategoryComponent } from '../../components/skill-category/skill-category.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCategoryComponent, SectionTitleComponent, TranslatePipe],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skillCategories = SKILL_CATEGORIES;
}
