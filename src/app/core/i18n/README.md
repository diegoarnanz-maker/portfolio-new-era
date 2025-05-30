# Sistema de Internacionalización (i18n)

Este directorio contiene el sistema de traducciones de la aplicación, organizado de manera modular y escalable.

## 📁 Estructura de Archivos

```
src/app/core/i18n/
├── index.ts                 # Exportación principal de todas las traducciones
├── README.md               # Documentación del sistema
├── es/                     # Traducciones en Español
│   ├── index.ts           # Exportación combinada del español
│   ├── navbar.ts          # Navegación
│   ├── home.ts            # Página de inicio
│   ├── about.ts           # Sobre mí
│   ├── projects.ts        # Proyectos
│   ├── experience.ts      # Experiencia
│   ├── skills.ts          # Habilidades
│   ├── contact.ts         # Contacto
│   ├── common.ts          # Elementos comunes
│   ├── dates.ts           # Fechas y meses
│   └── validation.ts      # Validaciones, errores y éxito
├── en/                     # Traducciones en Inglés
│   ├── index.ts           # Exportación combinada del inglés
│   ├── navbar.ts          # Navigation
│   ├── home.ts            # Home page
│   ├── about.ts           # About me
│   ├── projects.ts        # Projects
│   ├── experience.ts      # Experience
│   ├── skills.ts          # Skills
│   ├── contact.ts         # Contact
│   ├── common.ts          # Common elements
│   ├── dates.ts           # Dates and months
│   └── validation.ts      # Validations, errors and success
└── mr/                     # Traducciones en Marciano 👽
    ├── index.ts           # Exportación combinada del marciano
    ├── navbar.ts          # Zxorp Vorthak
    ├── home.ts            # Nexus Blixnok
    ├── about.ts           # Qwixel Morphix
    ├── projects.ts        # Blixnok Zephyr
    ├── experience.ts      # Vorthak Lumina
    ├── skills.ts          # Qwixel Nexus
    ├── contact.ts         # Zephyr Vorthak
    ├── common.ts          # Morphix Blixnok
    ├── dates.ts           # Zxorpius Nexus
    └── validation.ts      # Vorthak Qwixel
```

## 🌐 Idiomas Disponibles

| Código | Idioma | Bandera | Estado |
|--------|--------|---------|--------|
| `es` | Español | 🇪🇸 | ✅ Completo |
| `en` | English | 🇺🇸 | ✅ Completo |
| `mr` | Marciano | 👽 | ✅ Completo |

## 📝 Organización por Apartados

### 🧭 **Navbar** (`navbar.ts`)
Elementos de navegación principal:
- Enlaces del menú
- Cambio de tema
- Selector de idioma

### 🏠 **Home** (`home.ts`)
Página de inicio:
- Título principal
- Descripción
- Botones de acción

### 👤 **About** (`about.ts`)
Sección sobre mí:
- Título y descripción
- Párrafos informativos
- Estadísticas (años, repositorios, contribuciones)

### 💼 **Projects** (`projects.ts`)
Sección de proyectos:
- Títulos y descripciones
- Botones de acción
- Tecnologías y características

### 🎯 **Experience** (`experience.ts`)
Experiencia profesional:
- Títulos de sección
- Estados temporales
- Responsabilidades y logros

### ⚡ **Skills** (`skills.ts`)
Habilidades técnicas:
- Categorías de skills
- Tipos de tecnologías

### 📧 **Contact** (`contact.ts`)
Página de contacto:
- Formularios
- Mensajes de estado
- Validaciones

### 🔧 **Common** (`common.ts`)
Elementos comunes:
- Botones genéricos
- Estados de carga
- Acciones básicas

### 📅 **Dates** (`dates.ts`)
Fechas y tiempo:
- Nombres de meses
- Unidades de tiempo

### ✅ **Validation** (`validation.ts`)
Sistema de validación:
- Mensajes de error
- Mensajes de éxito
- Reglas de validación

## 🚀 Uso del Sistema

### Importación
```typescript
import { TRANSLATIONS } from './core/i18n';
```

### Uso en Componentes
```typescript
// En el template
{{ 'nav.home' | translate }}
{{ 'about.title' | translate }}
{{ 'contact.success' | translate }}

// Con parámetros
{{ 'validation.minLength' | translate:'5' }}
```

### Agregar Nuevas Traducciones

1. **Agregar a un apartado existente:**
   ```typescript
   // En es/navbar.ts
   export const navbar = {
     'nav.home': 'Inicio',
     'nav.newItem': 'Nuevo Elemento', // ← Nueva traducción
   };
   ```

2. **Crear nuevo apartado:**
   ```typescript
   // Crear es/newSection.ts
   export const newSection = {
     'newSection.title': 'Título',
     'newSection.description': 'Descripción',
   };
   
   // Agregar a es/index.ts
   import { newSection } from './newSection';
   export const ES_TRANSLATIONS = {
     ...navbar,
     ...newSection, // ← Incluir nueva sección
   };
   ```

## 🎨 Características Especiales

### 🛸 Idioma Marciano
El marciano es un idioma inventado con palabras como:
- **Zxorp** = Inicio/Home
- **Blixnok** = Proyectos/Projects  
- **Vorthak** = Experiencia/Experience
- **Qwixel** = Habilidades/Skills
- **Zephyr** = Contacto/Contact
- **Nexus** = Conexión/Link
- **Morphix** = Cambio/Change
- **Lumina** = Luz/Light

### 🔄 Interpolación de Parámetros
Soporte para parámetros dinámicos:
```typescript
'validation.minLength': 'Mínimo {0} caracteres'
```

### 🎯 Claves Organizadas
Sistema de claves jerárquico:
```
apartado.subseccion.elemento
├── nav.home
├── about.stats.repositories
├── contact.validation.required
└── common.actions.save
```

## 🔧 Mantenimiento

- **Consistencia**: Mantener la misma estructura en todos los idiomas
- **Nomenclatura**: Usar nombres descriptivos para las claves
- **Organización**: Agrupar traducciones relacionadas en el mismo archivo
- **Documentación**: Actualizar este README al agregar nuevos apartados

## 📊 Estadísticas

- **Total de idiomas**: 3
- **Total de apartados**: 10 por idioma
- **Total de traducciones**: ~130 por idioma
- **Cobertura**: 100% en todos los idiomas 