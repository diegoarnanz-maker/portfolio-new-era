import { Directive, ElementRef, Input, OnDestroy, OnInit, inject, Renderer2, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/services/translation.service';
import { LanguageService } from '../../core/services/language.service';

@Directive({
  selector: '[appSafeHtml]',
  standalone: true
})
export class SafeHtmlDirective implements OnInit, OnDestroy {
  @Input('appSafeHtml') translationKey!: string;
  
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  private sanitizer = inject(DomSanitizer);
  private translationService = inject(TranslationService);
  private languageService = inject(LanguageService);
  
  private subscription?: Subscription;

  ngOnInit(): void {
    this.updateContent();
    
    // Suscribirse a cambios de idioma
    this.subscription = this.languageService.language$.subscribe(() => {
      this.updateContent();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateContent(): void {
    if (!this.translationKey) return;
    
    const translatedText = this.translationService.translate(this.translationKey);
    const currentLang = this.languageService.getLanguageCode();
    
    // Detectar si el contenido contiene HTML
    const hasHtml = /<[^>]*>/g.test(translatedText);
    
    if (hasHtml) {
      // Para el lenguaje "code", mostrar las etiquetas como texto literal
      if (currentLang === 'code') {
        this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', translatedText);
      } else {
        // Para otros idiomas, renderizar como HTML
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', '');
        
        // Sanitizar y establecer el HTML
        const sanitizedHtml = this.sanitizer.sanitize(SecurityContext.HTML, translatedText);
        if (sanitizedHtml) {
          this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', sanitizedHtml);
        }
      }
    } else {
      // Renderizar como texto normal
      this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', translatedText);
    }
  }
} 