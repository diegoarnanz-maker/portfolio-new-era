import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  copyEmail(): void {
    navigator.clipboard.writeText('diego.arnanz.dev@gmail.com');
  }
}
