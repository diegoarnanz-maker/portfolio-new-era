import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { SkillCategory } from '../../../core/data/skills.data';

@Component({
  selector: 'app-skill-category',
  standalone: true,
  imports: [CommonModule, SkillIconComponent],
  templateUrl: './skill-category.component.html'
})
export class SkillCategoryComponent {
  @Input() category!: SkillCategory;
} 