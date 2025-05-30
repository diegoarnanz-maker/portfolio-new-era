# Sistema de Traducción (i18n)

Este sistema de traducción permite manejar múltiples idiomas en la aplicación de manera eficiente y escalable.

## Estructura de Archivos

```
src/app/core/i18n/
├── index.ts          # Exporta todos los diccionarios
├── es.ts            # Diccionario en español
├── en.ts            # Diccionario en inglés
└── README.md        # Esta documentación
```

## Cómo Agregar Nuevas Traducciones

### 1. Agregar claves en los diccionarios

**En `es.ts`:**
```typescript
export const ES_TRANSLATIONS = {
  // ... traducciones existentes
  'welcome.message': 'Bienvenido, {0}!',
  'items.count': 'Tienes {0} elementos',
  'user.profile': 'Perfil de {0}'
};
```

**En `en.ts`:**
```typescript
export const EN_TRANSLATIONS = {
  // ... traducciones existentes
  'welcome.message': 'Welcome, {0}!',
  'items.count': 'You have {0} items',
  'user.profile': '{0}\'s Profile'
};
```

### 2. Usar en componentes

#### Con el pipe (recomendado para templates):

```html
<!-- Traducción simple -->
<h1>{{ 'home.title' | translate }}</h1>

<!-- Traducción con parámetros -->
<p>{{ 'welcome.message' | translate: {0: userName} }}</p>
<span>{{ 'items.count' | translate: {0: itemCount} }}</span>
```

#### Con el servicio (para lógica de componente):

```typescript
import { TranslationService } from '@core/services/translation.service';

export class MyComponent {
  private translationService = inject(TranslationService);

  getMessage() {
    // Traducción simple
    const title = this.translationService.translate('home.title');
    
    // Traducción con parámetros
    const welcome = this.translationService.translate('welcome.message', {
      0: this.userName
    });
    
    return welcome;
  }

  // Para observables (reactivo)
  title$ = this.translationService.translate$('home.title');
  
  welcome$ = this.translationService.translate$('welcome.message', {
    0: this.userName
  });
}
```

## Convenciones de Nomenclatura

### Estructura de claves:
- `seccion.elemento`: Para elementos específicos de una sección
- `common.accion`: Para elementos comunes reutilizables
- `validation.tipo`: Para mensajes de validación
- `error.tipo`: Para mensajes de error

### Ejemplos:
```typescript
// ✅ Buenas prácticas
'nav.home'
'projects.title'
'contact.form.name'
'common.save'
'validation.required'
'error.network'

// ❌ Evitar
'homeTitle'
'PROJECTS_TITLE'
'contact_form_name'
```

## Interpolación de Parámetros

El sistema soporta interpolación usando placeholders `{0}`, `{1}`, etc.

```typescript
// Diccionario
'user.greeting': 'Hola {0}, tienes {1} mensajes nuevos'

// Uso
this.translationService.translate('user.greeting', {
  0: 'Juan',
  1: 5
});
// Resultado: "Hola Juan, tienes 5 mensajes nuevos"
```

## Agregar Nuevos Idiomas

### 1. Crear el archivo del idioma:

```typescript
// src/app/core/i18n/fr.ts
export const FR_TRANSLATIONS = {
  'nav.home': 'Accueil',
  'nav.projects': 'Projets',
  // ... más traducciones
};
```

### 2. Actualizar el índice:

```typescript
// src/app/core/i18n/index.ts
import { FR_TRANSLATIONS } from './fr';

export const TRANSLATIONS: Translations = {
  es: ES_TRANSLATIONS,
  en: EN_TRANSLATIONS,
  fr: FR_TRANSLATIONS  // Agregar aquí
};
```

### 3. Actualizar el LanguageService:

```typescript
// src/app/core/services/language.service.ts
public readonly availableLanguages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }  // Agregar aquí
];
```

## Métodos Útiles del TranslationService

```typescript
// Verificar si existe una traducción
const exists = this.translationService.hasTranslation('some.key');

// Obtener todas las claves de traducción
const keys = this.translationService.getTranslationKeys();

// Agregar traducciones dinámicamente
this.translationService.addTranslations('es', {
  'dynamic.key': 'Valor dinámico'
});

// Obtener traducciones del idioma actual
const currentTranslations = this.translationService.getCurrentTranslations();
```

## Mejores Prácticas

1. **Organización**: Agrupa las traducciones por secciones lógicas
2. **Consistencia**: Usa la misma estructura de claves en todos los idiomas
3. **Parámetros**: Usa interpolación para contenido dinámico
4. **Fallback**: Siempre proporciona una traducción en el idioma por defecto (español)
5. **Validación**: Verifica que todas las claves existan en todos los idiomas

## Ejemplo Completo

```typescript
// Componente
@Component({
  template: `
    <h1>{{ 'welcome.title' | translate }}</h1>
    <p>{{ 'user.info' | translate: {0: user.name, 1: user.age} }}</p>
    <button (click)="save()">{{ 'common.save' | translate }}</button>
  `
})
export class ExampleComponent {
  user = { name: 'Ana', age: 25 };
  
  save() {
    const message = this.translationService.translate('success.saved');
    console.log(message);
  }
}
``` 