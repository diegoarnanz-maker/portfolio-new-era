import { Component, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillIcon } from '../../../core/interfaces';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icon.component.html'
})
export class SkillIconComponent {
  @Input() skill!: SkillIcon;
  
  constructor(private elementRef: ElementRef) {}

  private colorClasses: { [key: string]: string } = {
    'red': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-red-500/10 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/30',
    'cyan': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-cyan-500/10 dark:border-cyan-500 dark:shadow-lg dark:shadow-cyan-500/30',
    'green': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-green-500/10 dark:border-green-500 dark:shadow-lg dark:shadow-green-500/30',
    'purple': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-purple-500/10 dark:border-purple-500 dark:shadow-lg dark:shadow-purple-500/30',
    'blue': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-blue-500/10 dark:border-blue-500 dark:shadow-lg dark:shadow-blue-500/30',
    'gray': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-gray-500/10 dark:border-gray-500 dark:shadow-lg dark:shadow-gray-500/30',
    'orange': 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-orange-500/10 dark:border-orange-500 dark:shadow-lg dark:shadow-orange-500/30'
  };

  getIconClasses(): string {
    const isMobileView = this.elementRef.nativeElement.classList.contains('mobile-view');
    const sizeClasses = isMobileView 
      ? 'w-12 h-12' 
      : 'w-10 h-10 md:w-3 md:h-3 lg:w-12 lg:h-12';
    
    // Solo agregar hover en desktop (cuando no es mobile-view)
    const hoverClasses = isMobileView ? '' : 'hover:scale-110';
    const baseClasses = `${sizeClasses} p-2 rounded-xl border transition-all duration-300 ${hoverClasses} flex items-center justify-center`;
    const colorClass = this.colorClasses[this.skill.color] || 'bg-black/10 border-black shadow-lg shadow-black/30 dark:bg-gray-500/10 dark:border-gray-500 dark:shadow-lg dark:shadow-gray-500/30';
    return `${baseClasses} ${colorClass}`;
  }

  isMobileView(): boolean {
    return this.elementRef.nativeElement.classList.contains('mobile-view');
  }
} 