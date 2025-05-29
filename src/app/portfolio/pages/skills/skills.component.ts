import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategoryComponent } from '../../components/skill-category/skill-category.component';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCategoryComponent],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skillCategories = SKILL_CATEGORIES;
}
