import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  private languageService = inject(LanguageService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Agregar header de idioma a todas las peticiones HTTP
    const currentLang = this.languageService.getLanguageCode();
    
    const langReq = req.clone({
      setHeaders: {
        'Accept-Language': currentLang,
        'Content-Language': currentLang
      }
    });

    return next.handle(langReq);
  }
} 