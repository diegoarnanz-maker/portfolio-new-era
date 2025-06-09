import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCategoryComponent } from '../../components/project-category/project-category.component';
import { ProjectModalComponent } from '../../components/project-modal/project-modal.component';
import { PROJECT_CATEGORIES } from '../../../core/mock/projects.mock';
import { Project } from '../../../core/interfaces';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCategoryComponent, ProjectModalComponent, TranslateModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projectCategories = PROJECT_CATEGORIES;
  selectedProject: Project | null = null;
  isModalOpen = false;

  onProjectModalOpen(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  onModalClose(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
  }
}
