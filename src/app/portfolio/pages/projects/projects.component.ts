import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCategoryComponent } from '../../components/project-category/project-category.component';
import { PROJECT_CATEGORIES } from '../../../core/mock/projects.mock';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCategoryComponent, TranslatePipe],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projectCategories = PROJECT_CATEGORIES;

  trackByCategory(index: number, category: any): string {
    return category.id;
  }
}
