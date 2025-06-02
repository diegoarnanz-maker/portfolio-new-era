import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const BACKEND_PROJECTS: Project[] = [
  {
    title: 'REST API con Spring Boot',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/api.jpg',
    githubUrl: 'https://github.com/usuario/rest-api',
    category: 'backend',
    status: 'completed',
    longDescription: 'API RESTful robusta con autenticación JWT, documentación con Swagger y base de datos PostgreSQL. Explora la arquitectura y endpoints de esta API RESTful robusta.',
    images: [
      '/assets/img/projects/rest-api/modal/swagger-docs.jpg',
      '/assets/img/projects/rest-api/modal/postman-tests.jpg',
      '/assets/img/projects/rest-api/modal/database-schema.jpg',
      '/assets/img/projects/rest-api/modal/security-config.jpg'
    ],
    technicalDetails: [
      'Documentación automática con Swagger',
      'Autenticación JWT segura',
      'Base de datos PostgreSQL optimizada',
      'Validación de datos robusta',
      'Manejo de errores centralizado',
      'Tests unitarios y de integración'
    ]
  }
]; 