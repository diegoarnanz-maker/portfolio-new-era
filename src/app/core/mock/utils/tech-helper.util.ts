import { Technology } from '../../interfaces';
import { AVAILABLE_TECHNOLOGIES } from '../../interfaces/available-technologies.const';
import { ADDITIONAL_TECHNOLOGIES } from '../constants/additional-technologies.const';

// Función helper para obtener tecnología
export function getTech(key: string): Technology {
  return AVAILABLE_TECHNOLOGIES[key] || ADDITIONAL_TECHNOLOGIES[key] || { name: key, icon: '/assets/img/icons/default.svg' };
} 