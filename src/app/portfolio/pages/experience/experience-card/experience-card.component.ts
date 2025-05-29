import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../../core/interfaces/experience.interface';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
} 