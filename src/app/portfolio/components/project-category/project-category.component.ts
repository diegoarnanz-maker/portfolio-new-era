import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCategory, Project } from '../../../core/interfaces/project.interface';
import KeenSlider from 'keen-slider';

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

@Component({
  selector: 'app-project-category',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-category.component.html',
  styleUrls: ['./project-category.component.css']
})
export class ProjectCategoryComponent implements AfterViewInit, OnDestroy {
  @Input() category!: ProjectCategory;
  @Output() projectModalOpen = new EventEmitter<Project>();
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('particleContainer') particleContainer!: ElementRef<HTMLElement>;
  
  slider: any = null;
  currentSlide = 0;
  dotHelper: Array<number> = [];
  particles: Particle[] = [];
  animationFrame: number | null = null;

  private readonly particleColors = [
    'rgb(6, 182, 212)',    // action-default
    'rgb(59, 130, 246)',   // text-accent  
    'rgb(8, 145, 178)',    // action-hover
    'rgb(167, 139, 250)',  // accent-purple
    'rgb(34, 197, 94)',    // green
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeSlider();
      this.startParticleAnimation();
    }, 100);
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.destroy();
    }
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private initializeSlider() {
    if (!this.sliderRef?.nativeElement) return;
    
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        initial: 0,
        loop: false,
        mode: 'snap',
        slides: {
          perView: this.getSlidesPerView(),
          spacing: this.getSpacing(),
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: this.getSlidesPerView(768),
              spacing: this.getSpacing(768),
            },
          },
          '(min-width: 1024px)': {
            slides: {
              perView: this.getSlidesPerView(1024),
              spacing: this.getSpacing(1024),
            },
          },
        },
      },
      [
        (slider: any) => {
          slider.on('created', () => {
            this.updateDots();
          });
          
          slider.on('slideChanged', () => {
            this.currentSlide = slider.track.details.rel;
            this.updateDots();
          });
        },
      ]
    );
  }

  private getSlidesPerView(breakpoint?: number): number {
    if (breakpoint && breakpoint >= 1024) return 3;
    if (breakpoint && breakpoint >= 768) return 2;
    return 1;
  }

  private getSpacing(breakpoint?: number): number {
    if (breakpoint && breakpoint >= 1024) return 24;
    if (breakpoint && breakpoint >= 768) return 20;
    return 16;
  }

  private updateDots() {
    if (!this.slider) return;
    
    const slidesPerView = this.getSlidesPerView(window.innerWidth);
    const totalSlides = this.category.projects.length;
    const dotsCount = Math.max(1, totalSlides - slidesPerView + 1);
    
    this.dotHelper = Array.from({ length: dotsCount }, (_, i) => i);
  }

  // Sistema de partículas
  private createParticles(event: MouseEvent, direction: 'left' | 'right') {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Crear 8-12 partículas
    const particleCount = Math.floor(Math.random() * 5) + 8;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 3 + 2;
      const size = Math.random() * 4 + 2;
      const life = Math.random() * 60 + 40;
      
      // Ajustar dirección según el botón
      const directionMultiplier = direction === 'left' ? -1 : 1;
      const baseAngle = direction === 'left' ? Math.PI : 0;
      const spreadAngle = baseAngle + (Math.random() - 0.5) * Math.PI;
      
      const particle: Particle = {
        id: `particle-${Date.now()}-${i}`,
        x: centerX,
        y: centerY,
        vx: Math.cos(spreadAngle) * speed * directionMultiplier,
        vy: Math.sin(spreadAngle) * speed + (Math.random() - 0.5) * 2,
        color: this.particleColors[Math.floor(Math.random() * this.particleColors.length)],
        size: size,
        life: life,
        maxLife: life
      };
      
      this.particles.push(particle);
    }
  }

  private updateParticles() {
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // Gravedad
      particle.life--;
      
      return particle.life > 0;
    });
  }

  private renderParticles() {
    if (!this.particleContainer?.nativeElement) return;
    
    const container = this.particleContainer.nativeElement;
    container.innerHTML = '';
    
    this.particles.forEach(particle => {
      const element = document.createElement('div');
      element.style.position = 'fixed';
      element.style.left = `${particle.x}px`;
      element.style.top = `${particle.y}px`;
      element.style.width = `${particle.size}px`;
      element.style.height = `${particle.size}px`;
      element.style.backgroundColor = particle.color;
      element.style.borderRadius = '50%';
      element.style.pointerEvents = 'none';
      element.style.zIndex = '9999';
      element.style.opacity = `${particle.life / particle.maxLife}`;
      element.style.boxShadow = `0 0 ${particle.size * 2}px ${particle.color}`;
      
      container.appendChild(element);
    });
  }

  private startParticleAnimation() {
    const animate = () => {
      this.updateParticles();
      this.renderParticles();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  // Navegación con efectos de partículas
  goToPrevSlide(event?: MouseEvent) {
    if (this.slider) {
      this.slider.prev();
      if (event) {
        this.createParticles(event, 'left');
      }
    }
  }

  goToNextSlide(event?: MouseEvent) {
    if (this.slider) {
      this.slider.next();
      if (event) {
        this.createParticles(event, 'right');
      }
    }
  }

  goToSlide(index: number) {
    if (this.slider) {
      this.slider.moveToIdx(index);
    }
  }

  // Verificaciones
  canGoPrevious(): boolean {
    return this.currentSlide > 0;
  }

  canGoNext(): boolean {
    if (!this.slider) return false;
    const slidesPerView = this.getSlidesPerView(window.innerWidth);
    return this.currentSlide < this.category.projects.length - slidesPerView;
  }

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

  onProjectModalOpen(project: Project): void {
    this.projectModalOpen.emit(project);
  }
} 