import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  isAssistantModalOpen = false;

  openAssistantModal(): void {
    this.isAssistantModalOpen = true;
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }

  closeAssistantModal(): void {
    this.isAssistantModalOpen = false;
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }
}
