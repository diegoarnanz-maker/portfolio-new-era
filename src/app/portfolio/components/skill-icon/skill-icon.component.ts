import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillIcon } from '../../../core/interfaces/skill.interface';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icon.component.html'
})
export class SkillIconComponent {
  @Input() skill!: SkillIcon;

  private colorClasses: { [key: string]: string } = {
    'red': 'bg-red-500/10 border-red-500 shadow-lg shadow-red-500/30',
    'cyan': 'bg-cyan-500/10 border-cyan-500 shadow-lg shadow-cyan-500/30',
    'green': 'bg-green-500/10 border-green-500 shadow-lg shadow-green-500/30',
    'purple': 'bg-purple-500/10 border-purple-500 shadow-lg shadow-purple-500/30',
    'blue': 'bg-blue-500/10 border-blue-500 shadow-lg shadow-blue-500/30',
    'gray': 'bg-gray-500/10 border-gray-500 shadow-lg shadow-gray-500/30',
    'orange': 'bg-orange-500/10 border-orange-500 shadow-lg shadow-orange-500/30'
  };

  getIconClasses(): string {
    const baseClasses = 'w-12 h-12 p-2 rounded-xl border transition-all duration-300 hover:scale-110 flex items-center justify-center';
    const colorClass = this.colorClasses[this.skill.color] || 'bg-gray-500/10 border-gray-500 shadow-lg shadow-gray-500/30';
    return `${baseClasses} ${colorClass}`;
  }
} 