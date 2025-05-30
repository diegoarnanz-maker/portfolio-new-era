import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../core/interfaces/experience.interface';
import { experiences, currentStatus } from '../../../core/mock/experience.mock';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent, TranslatePipe],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = experiences;
  currentStatus: Experience = currentStatus;
}
