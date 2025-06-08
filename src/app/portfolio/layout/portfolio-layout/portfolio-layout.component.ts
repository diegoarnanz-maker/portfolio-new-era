import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ExperienceComponent } from '../../pages/experience/experience.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ExperienceComponent,    ContactComponent
  ],
  templateUrl: './portfolio-layout.component.html'
})
export class PortfolioLayoutComponent {

}
