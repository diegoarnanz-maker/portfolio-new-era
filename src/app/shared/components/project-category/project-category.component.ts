import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCategory } from '../../../core/interfaces/project.interface';

@Component({
  selector: 'app-project-category',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-category.component.html'
})
export class ProjectCategoryComponent {
  @Input() category!: ProjectCategory;
} 