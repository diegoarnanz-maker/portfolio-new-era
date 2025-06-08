import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  copyEmail(): void {
    navigator.clipboard.writeText('diego.arnanz.dev@gmail.com');
  }
}
