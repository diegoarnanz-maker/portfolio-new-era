import { Technology } from './technology.interface';

// Mapeo de tecnologías disponibles con sus iconos
export const AVAILABLE_TECHNOLOGIES: { [key: string]: Technology } = {
  angular: {
    name: 'Angular',
    icon: '/assets/img/icons/angular.svg'
  },
  dotnet: {
    name: '.NET',
    icon: '/assets/img/icons/dotnet.svg'
  },
  'spring-boot': {
    name: 'Spring Boot',
    icon: '/assets/img/icons/spring-boot.svg'
  },
  'jwt': {
    name: 'JWT',
    icon: '/assets/img/icons/jwt.svg'
  },
  'mysql': {
    name: 'MySQL',
    icon: '/assets/img/icons/mysql.svg'
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: '/assets/img/icons/tailwind.svg'
  },
  sql: {
    name: 'SQL',
    icon: '/assets/img/icons/sql.svg'
  },
  github: {
    name: 'GitHub',
    icon: '/assets/img/icons/github.svg'
  },
  postman: {
    name: 'Postman',
    icon: '/assets/img/icons/postman.svg'
  },
  cursor: {
    name: 'Cursor',
    icon: '/assets/img/icons/cursor.svg'
  },
  n8n: {
    name: 'n8n',
    icon: '/assets/img/icons/n8n.svg'
  },
  thymeleaf: {
    name: 'Thymeleaf',
    icon: '/assets/img/icons/thymeleaf.svg'
  },
  graphql: {
    name: 'GraphQL',
    icon: '/assets/img/icons/graphql.svg'
  },
  docker: {
    name: 'Docker',
    icon: '/assets/img/icons/docker.svg'
  },
  python: {
    name: 'Python',
    icon: '/assets/img/icons/python.svg'
  },
  openai: {
    name: 'OpenAI',
    icon: '/assets/img/icons/openai.svg'
  }
}; 