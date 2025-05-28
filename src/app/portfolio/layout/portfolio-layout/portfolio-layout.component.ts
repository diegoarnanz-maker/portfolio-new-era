import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ExperienceComponent } from '../../pages/experience/experience.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { SkillsComponent } from '../../pages/skills/skills.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './portfolio-layout.component.html'
})
export class PortfolioLayoutComponent {

}
