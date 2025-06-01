import { Technology } from '../../interfaces/technology.interface';

// Tecnologías adicionales no disponibles en iconos
export const ADDITIONAL_TECHNOLOGIES: { [key: string]: Technology } = {
  typescript: { name: 'TypeScript', icon: '/assets/img/icons/typescript.svg' },
  jwt: { name: 'JWT', icon: '/assets/img/icons/jwt.svg' },
  mysql: { name: 'MySQL', icon: '/assets/img/icons/mysql.svg' },
  azure: { name: 'Azure', icon: '/assets/img/icons/azure.svg' },
  openai: { name: 'OpenAI', icon: '/assets/img/icons/openai.svg' },
  swagger: { name: 'Swagger', icon: '/assets/img/icons/swagger.svg' },
  springsecurity: { name: 'Spring Security', icon: '/assets/img/icons/springsecurity.svg' },
  machinelearning: { name: 'Machine Learning', icon: '/assets/img/icons/machinelearning.svg' },
}; 