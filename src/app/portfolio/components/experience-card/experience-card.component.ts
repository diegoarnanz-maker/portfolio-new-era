import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../core/interfaces/experience.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
  @Input() isCurrentStatus: boolean = false;
} 