import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/interfaces/project.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  @Input() project: Project | null = null;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  currentImageIndex = 0;
  currentGalleryType: 'main' | 'demo' = 'main';
  isImageLoading = false;

  // Variables para el arrastre
  private isDragging = false;
  private startX = 0;
  private dragThreshold = 50;

  ngOnInit() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
    this.removeDragListeners();
  }

  // Métodos para el arrastre
  onMouseDown(event: MouseEvent): void {
    if (this.currentImages.length <= 1) return;
    
    this.isDragging = true;
    this.startX = event.clientX;
    
    event.preventDefault();
    this.addDragListeners();
  }

  private onMouseMove = (event: MouseEvent): void => {
    if (!this.isDragging) return;
    event.preventDefault();
  };

  private onMouseUp = (event: MouseEvent): void => {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.removeDragListeners();
    
    const deltaX = event.clientX - this.startX;
    
    if (Math.abs(deltaX) > this.dragThreshold) {
      if (deltaX > 0) {
        this.previousImage();
      } else {
        this.nextImage();
      }
    }
    
    event.preventDefault();
  };

  onTouchStart(event: TouchEvent): void {
    if (this.currentImages.length <= 1) return;
    
    const touch = event.touches[0];
    this.isDragging = true;
    this.startX = touch.clientX;
    
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent): void {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - this.startX;
    
    if (Math.abs(deltaX) > this.dragThreshold) {
      if (deltaX > 0) {
        this.previousImage();
      } else {
        this.nextImage();
      }
    }
    
    event.preventDefault();
  }

  private addDragListeners(): void {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  private removeDragListeners(): void {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  get currentImages(): string[] {
    if (!this.project) return [];
    
    if (this.currentGalleryType === 'demo' && this.project.demoImages) {
      return this.project.demoImages;
    }
    
    return this.project.images || [];
  }

  get currentImageTitles(): string[] {
    if (!this.project) return [];
    
    if (this.currentGalleryType === 'demo' && this.project.demoImageTitles) {
      return this.project.demoImageTitles;
    }
    
    return this.project.imageTitles || [];
  }

  get currentImage(): string {
    const images = this.currentImages;
    return images[this.currentImageIndex] || '';
  }

  get currentImageTitle(): string {
    const titles = this.currentImageTitles;
    
    // Si hay títulos específicos, usarlos
    if (titles[this.currentImageIndex]) {
      return titles[this.currentImageIndex];
    }
    
    // Para proyectos backend en galería principal, mostrar "Vista Desktop"
    if (this.project?.category === 'backend' && this.currentGalleryType === 'main') {
      return 'Vista Desktop';
    }
    
    // Para proyectos frontend y fullstack en galería principal, usar títulos por defecto
    if ((this.project?.category === 'frontend' || this.project?.category === 'fullstack') && this.currentGalleryType === 'main') {
      const deviceTitles = ['Vista Desktop', 'Vista Tablet', 'Vista Mobile'];
      return deviceTitles[this.currentImageIndex] || `Imagen ${this.currentImageIndex + 1}`;
    }
    
    // Fallback por defecto
    return `Imagen ${this.currentImageIndex + 1}`;
  }

  get hasMainImages(): boolean {
    return (this.project?.images?.length || 0) > 0;
  }

  get hasDemoImages(): boolean {
    return (this.project?.demoImages?.length || 0) > 0;
  }

  switchGallery(type: 'main' | 'demo'): void {
    this.currentGalleryType = type;
    this.currentImageIndex = 0;
  }

  previousImage(): void {
    const images = this.currentImages;
    if (images.length > 0) {
      this.currentImageIndex = this.currentImageIndex > 0 
        ? this.currentImageIndex - 1 
        : images.length - 1;
    }
  }

  nextImage(): void {
    const images = this.currentImages;
    if (images.length > 0) {
      this.currentImageIndex = this.currentImageIndex < images.length - 1 
        ? this.currentImageIndex + 1 
        : 0;
    }
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  onImageLoad(): void {
    this.isImageLoading = false;
  }

  onImageError(event: any): void {
    console.warn('Error loading image:', event.target.src);
    this.isImageLoading = false;
  }

  onThumbnailError(event: any): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
    }
  }

  onImageStart(): void {
    this.isImageLoading = true;
  }

  close(): void {
    document.body.style.overflow = 'auto';
    this.closeModal.emit();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        this.close();
        break;
      case 'ArrowLeft':
        this.previousImage();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
    }
  }
} 