import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCategoryComponent } from '../../components/project-category/project-category.component';
import { PROJECT_CATEGORIES } from '../../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCategoryComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projectCategories = PROJECT_CATEGORIES;
}
