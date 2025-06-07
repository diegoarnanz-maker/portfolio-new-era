import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategoryComponent } from '../../components/skill-category/skill-category.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { SafeHtmlDirective } from '../../../shared/directives/safe-html.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, SkillCategoryComponent, SectionTitleComponent, TranslatePipe, SafeHtmlDirective],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  skillCategories = SKILL_CATEGORIES;
} 