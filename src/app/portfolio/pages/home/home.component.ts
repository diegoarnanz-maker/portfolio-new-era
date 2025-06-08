import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AiAssistantComponent } from '../../components/ai-assistant/ai-assistant.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, AiAssistantComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
}
