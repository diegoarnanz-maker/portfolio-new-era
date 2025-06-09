import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language.service';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsTranslationService {
  private languageService = inject(LanguageService);

  translateProject(project: Project): Project {
    return {
      ...project,
      title: this.getTranslatedTitle(project.title),
      longDescription: this.getTranslatedDescription(project.title, project.longDescription),
      imageTitles: this.getTranslatedImageTitles(project.imageTitles),
      demoImageTitles: this.getTranslatedImageTitles(project.demoImageTitles),
      technicalDetails: this.getTranslatedTechnicalDetails(project.technicalDetails),
      challenges: this.getTranslatedChallenges(project.challenges)
    };
  }

  private getTranslatedTitle(title: string): string {
    const titleKey = this.getTitleKey(title);
    if (titleKey) {
      const translation = this.languageService.getTranslation(titleKey);
      return translation !== titleKey ? translation : title;
    }
    return title;
  }

  private getTranslatedDescription(title: string, description?: string): string | undefined {
    if (!description) return description;
    
    const descriptionKey = this.getDescriptionKey(title);
    if (descriptionKey) {
      const translation = this.languageService.getTranslation(descriptionKey);
      return translation !== descriptionKey ? translation : description;
    }
    return description;
  }

  private getTranslatedImageTitles(titles?: string[]): string[] | undefined {
    if (!titles) return titles;
    
    return titles.map(title => {
      // Aquí podrías implementar lógica para traducir títulos de imágenes específicos
      return title;
    });
  }

  private getTranslatedTechnicalDetails(details?: string[]): string[] | undefined {
    if (!details) return details;
    
    return details.map(detail => {
      // Buscar traducciones comunes para detalles técnicos
      const commonTranslations: { [key: string]: string } = {
        'Desarrollado con Angular': 'projects.technical.angular',
        'Estilos con Tailwind CSS': 'projects.technical.tailwind',
        'Diseño completamente responsive': 'projects.technical.responsive',
        'Integración con API externa': 'projects.technical.api',
        'Arquitectura basada en Spring Boot': 'projects.technical.springboot',
        'Templates con Thymeleaf': 'projects.technical.thymeleaf',
        'Persistencia con JPA/Hibernate': 'projects.technical.jpa',
        'Integración con OpenAI': 'projects.technical.openai',
        'Desarrollado en n8n': 'projects.technical.n8n'
      };

      for (const [spanish, key] of Object.entries(commonTranslations)) {
        if (detail.includes(spanish)) {
          const translation = this.languageService.getTranslation(key);
          if (translation !== key) {
            return detail.replace(spanish, translation);
          }
        }
      }

      return detail;
    });
  }

  private getTranslatedChallenges(challenges?: string[]): string[] | undefined {
    if (!challenges) return challenges;
    
    return challenges.map(challenge => {
      // Buscar traducciones comunes para desafíos
      const commonTranslations: { [key: string]: string } = {
        'Implementación de diseño responsive para múltiples dispositivos': 'projects.challenges.responsive',
        'Integración y manejo de datos desde API externa': 'projects.challenges.api',
        'Diseño de interfaz intuitiva y atractiva': 'projects.challenges.ui',
        'Optimización de rendimiento y carga': 'projects.challenges.performance',
        'Implementación de lógica de inteligencia artificial': 'projects.challenges.ai',
        'Diseño eficiente de base de datos': 'projects.challenges.database'
      };

      for (const [spanish, key] of Object.entries(commonTranslations)) {
        if (challenge.includes(spanish)) {
          const translation = this.languageService.getTranslation(key);
          if (translation !== key) {
            return challenge.replace(spanish, translation);
          }
        }
      }

      return challenge;
    });
  }

  private getTitleKey(title: string): string | null {
    const titleMap: { [key: string]: string } = {
      'AGoodShop': 'projects.agoodshop.title',
      'Portfolio v.1': 'projects.portfolio-v1.title',
      'Ensigna': 'projects.ensigna.title',
      'Pokédex App': 'projects.pokedex.title',
      'Series App': 'projects.series.title',
      'Easy-task': 'projects.easy-task.title',
      'Gestión de Eventos': 'projects.gestion-eventos.title',
      'Cajero Virtual': 'projects.cajero-virtual.title',
      'Gestión de excursiones': 'projects.gestion-excursiones.title',
      'AI career conversation': 'projects.ai-career.title',
      'Gimnasio-agent': 'projects.gimnasio-agent.title',
      'Assistan-agent': 'projects.assistan-agent.title'
    };

    return titleMap[title] || null;
  }

  private getDescriptionKey(title: string): string | null {
    const descriptionMap: { [key: string]: string } = {
      'AGoodShop': 'projects.agoodshop.description',
      'Portfolio v.1': 'projects.portfolio-v1.description',
      'Ensigna': 'projects.ensigna.description',
      'Pokédx App': 'projects.pokedex.description',
      'Series App': 'projects.series.description',
      'Easy-task': 'projects.easy-task.description',
      'Gestión de Eventos': 'projects.gestion-eventos.description',
      'Cajero Virtual': 'projects.cajero-virtual.description',
      'Gestión de excursiones': 'projects.gestion-excursiones.description',
      'AI career conversation': 'projects.ai-career.description',
      'Gimnasio-agent': 'projects.gimnasio-agent.description',
      'Assistan-agent': 'projects.assistan-agent.description'
    };

    return descriptionMap[title] || null;
  }
} 