import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { SkillCategoryPipe } from '../../../shared/pipes/skill-category.pipe';
import { SkillCategory } from '../../../core/data/skills.data';

@Component({
  selector: 'app-skill-category',
  standalone: true,
  imports: [CommonModule, SkillIconComponent, TranslateModule, SkillCategoryPipe],
  templateUrl: './skill-category.component.html'
})
export class SkillCategoryComponent {
  @Input() category!: SkillCategory;
} 