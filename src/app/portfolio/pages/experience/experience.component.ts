import { Component } from '@angular/core';
import { Experience } from '../../../core/interfaces/experience.interface';
import { experiences, currentStatus } from '../../../core/mock/experience.mock';
import { ExperienceCardComponent } from './experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = experiences;
  currentStatus: Experience = currentStatus;
}
