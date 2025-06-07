import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  template: `
    <div class="text-center mb-16">
      <h2 class="section-title">{{ title }}</h2>
      <div class="section-title-line"></div>
    </div>
  `,
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input() title = '';
}
