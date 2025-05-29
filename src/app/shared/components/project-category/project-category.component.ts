import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCategory } from '../../../core/interfaces/project.interface';

// Importar Swiper
import { register } from 'swiper/element/bundle';

// Registrar Swiper custom elements
register();

@Component({
  selector: 'app-project-category',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-category.component.html',
  styleUrls: ['./project-category.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectCategoryComponent {
  @Input() category!: ProjectCategory;
  
  // Configuración de Swiper
  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    // Configuración de accesibilidad
    a11y: {
      prevSlideMessage: 'Proyecto anterior',
      nextSlideMessage: 'Proyecto siguiente',
      paginationBulletMessage: 'Ir al proyecto {{index}}'
    },
    // Configuración de teclado
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  };

  // Verificar si se debe mostrar la navegación
  shouldShowNavigation(): boolean {
    if (!this.category?.projects) return false;
    
    if (window.innerWidth >= 1024) {
      return this.category.projects.length > 3;
    } else if (window.innerWidth >= 768) {
      return this.category.projects.length > 2;
    } else {
      return this.category.projects.length > 1;
    }
  }
} 