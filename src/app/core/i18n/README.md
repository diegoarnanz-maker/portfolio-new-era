# 🌍 Sistema de Internacionalización (i18n)

## 📋 Descripción

Sistema profesional de internacionalización implementado con **ngx-translate** para el portfolio de Diego. Soporta múltiples idiomas con detección automática del navegador, persistencia en localStorage y arquitectura modular.

## 🏗️ Arquitectura

### Componentes Principales

1. **LanguageService** - Servicio principal para gestión de idiomas
2. **TranslationLoader** - Cargador personalizado de traducciones
3. **SafeTranslatePipe** - Pipe personalizado con sanitización HTML
4. **LanguageInterceptor** - Interceptor HTTP para headers de idioma
5. **LanguageGuard** - Guard para validación de rutas con idiomas

### Estructura de Archivos

```
src/app/core/i18n/
├── es/                     # Traducciones en español
│   ├── navbar.ts
│   ├── home.ts
│   ├── about.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── contact.ts
│   ├── common.ts
│   ├── dates.ts
│   ├── validation.ts
│   └── index.ts
├── en/                     # Traducciones en inglés
│   └── [mismos archivos]
├── translation-loader.ts   # Cargador personalizado
├── index.ts               # Exportaciones principales
└── README.md              # Esta documentación
```

## 🚀 Uso

### En Templates (HTML)

```html
<!-- Pipe básico -->
{{ 'nav.home' | translate }}

<!-- Pipe con parámetros -->
{{ 'welcome.message' | translate: {name: userName} }}

<!-- Pipe personalizado con HTML -->
{{ 'about.description' | safeTranslate: null: true }}

<!-- Directiva personalizada (legacy) -->
<div [appSafeHtml]="'about.description.paragraph1'"></div>
```

### En Componentes (TypeScript)

```typescript
import { LanguageService } from '@core/services/language.service';

export class MyComponent {
  private languageService = inject(LanguageService);

  // Obtener traducción programáticamente
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  // Cambiar idioma
  async changeLanguage(langCode: string) {
    const language = this.languageService.getLanguageByCode(langCode);
    if (language) {
      await this.languageService.setLanguage(language);
    }
  }

  // Suscribirse a cambios de idioma
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      console.log('Idioma actual:', lang.name);
    });
  }
}
```

## 🔧 Configuración

### app.config.ts

```typescript
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslationLoader } from './core/i18n/translation-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... otros providers
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: { provide: TranslateLoader, useClass: TranslationLoader }
      })
    )
  ]
};
```

### Importar en Componentes

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, TranslateModule], // Importar TranslateModule
  templateUrl: './example.component.html'
})
export class ExampleComponent { }
```

## 📝 Agregar Nuevas Traducciones

### 1. Crear archivo de traducción

```typescript
// src/app/core/i18n/es/nueva-seccion.ts
export const nuevaSeccion = {
  'nuevaSeccion.titulo': 'Mi Título',
  'nuevaSeccion.descripcion': 'Mi descripción con <strong>HTML</strong>',
  'nuevaSeccion.mensaje': 'Hola {{nombre}}, bienvenido'
};
```

### 2. Exportar en index.ts

```typescript
// src/app/core/i18n/es/index.ts
import { nuevaSeccion } from './nueva-seccion';

export const ES_TRANSLATIONS = {
  // ... otras traducciones
  ...nuevaSeccion
};
```

### 3. Repetir para otros idiomas

Crear el mismo archivo en `en/nueva-seccion.ts` con las traducciones correspondientes.

## 🎯 Mejores Prácticas

### Nomenclatura de Claves

```typescript
// ✅ Bueno - Jerárquico y descriptivo
'nav.home': 'Inicio'
'about.description.paragraph1': 'Mi descripción...'
'contact.form.validation.email.required': 'Email es requerido'

// ❌ Malo - Plano y confuso
'home': 'Inicio'
'desc1': 'Mi descripción...'
'emailReq': 'Email es requerido'
```

### Organización por Módulos

- Cada sección/página tiene su propio archivo
- Archivos comunes para elementos compartidos
- Validaciones y errores en archivos separados

### Uso de Parámetros

```typescript
// Definir con parámetros
'welcome.message': 'Bienvenido {{name}}, tienes {{count}} mensajes'

// Usar en template
{{ 'welcome.message' | translate: {name: user.name, count: messages.length} }}
```

## 🔍 Debugging

### Verificar Traducciones Faltantes

```typescript
// El servicio automáticamente logea advertencias
if (!this.languageService.hasTranslation('mi.clave')) {
  console.warn('Traducción faltante');
}
```

### Inspeccionar Estado Actual

```typescript
console.log('Idioma actual:', this.languageService.getCurrentLanguage());
console.log('Código de idioma:', this.languageService.getLanguageCode());
```

## 🌟 Características Avanzadas

### Detección Automática del Navegador
- Detecta automáticamente el idioma preferido del usuario
- Fallback al idioma por defecto si no está soportado

### Persistencia
- Guarda la preferencia del usuario en localStorage
- Restaura el idioma seleccionado en futuras visitas

### Sanitización HTML
- Soporte seguro para HTML en traducciones
- Pipe personalizado `safeTranslate` para contenido HTML

### Headers HTTP
- Interceptor automático que agrega headers de idioma
- Útil para APIs que soportan internacionalización

## 🚨 Troubleshooting

### Problema: Traducciones no se actualizan
**Solución:** Verificar que el componente importe `TranslateModule`

### Problema: HTML no se renderiza
**Solución:** Usar `safeTranslate` pipe con parámetro `true` o directiva `appSafeHtml`

### Problema: Idioma no persiste
**Solución:** Verificar que localStorage esté disponible y no bloqueado

## 📚 Referencias

- [ngx-translate Documentation](https://github.com/ngx-translate/core)
- [Angular i18n Guide](https://angular.io/guide/i18n)
- [MDN Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
