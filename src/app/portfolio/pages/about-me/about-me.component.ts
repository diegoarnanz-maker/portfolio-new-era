import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategoryComponent } from '../../components/skill-category/skill-category.component';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, SkillCategoryComponent, TranslatePipe],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  skillCategories = SKILL_CATEGORIES;
} 