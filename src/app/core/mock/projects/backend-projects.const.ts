import { Project } from '../../interfaces/project.interface';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';

export const BACKEND_PROJECTS: Project[] = [
  {
    id: 'rest-api',
    title: 'REST API con Spring Boot',
    description: 'API RESTful robusta con autenticación JWT, documentación con Swagger y base de datos PostgreSQL.',
    shortDescription: 'API REST con Spring Boot y JWT',
    technologies: [
      AVAILABLE_TECHNOLOGIES['spring-boot'],
      AVAILABLE_TECHNOLOGIES['sql']
    ],
    imageUrl: '/assets/img/projects/api.jpg',
    githubUrl: 'https://github.com/usuario/rest-api',
    modalData: {
      title: 'API REST con Spring Boot',
      description: 'Explora la arquitectura y endpoints de esta API RESTful robusta.',
      images: [
        '/assets/img/projects/rest-api/modal/swagger-docs.jpg',
        '/assets/img/projects/rest-api/modal/postman-tests.jpg',
        '/assets/img/projects/rest-api/modal/database-schema.jpg',
        '/assets/img/projects/rest-api/modal/security-config.jpg'
      ],
      features: [
        'Documentación automática con Swagger',
        'Autenticación JWT segura',
        'Base de datos PostgreSQL optimizada',
        'Validación de datos robusta',
        'Manejo de errores centralizado',
        'Tests unitarios y de integración'
      ]
    },
    category: 'backend',
    featured: true,
    status: 'completed',
  }
]; 