import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  copyEmail(): void {
    navigator.clipboard.writeText('diego.arnanz.dev@gmail.com');
  }
}
