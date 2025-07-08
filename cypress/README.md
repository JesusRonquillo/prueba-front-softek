# Cypress Testing Suite

Este proyecto incluye una suite completa de tests E2E usando Cypress para garantizar la calidad y funcionalidad de la aplicación de cotización de seguros Rimac.

## 🚀 Configuración

### Instalación

```bash
npm install
```

### Scripts disponibles

```bash
# Abrir Cypress en modo interactivo
npm run cy:open

# Ejecutar tests en modo headless
npm run cy:run

# Ejecutar tests en Chrome
npm run cy:run:chrome

# Ejecutar tests en Firefox
npm run cy:run:firefox

# Ejecutar servidor y tests juntos
npm run test:e2e

# Ejecutar servidor y abrir Cypress
npm run test:e2e:dev
```

## 📂 Estructura de Tests

### Tests E2E

#### `quote-flow.cy.ts`

- ✅ **Flujo completo de cotización**: Home → Ofertas → Resumen
- ✅ **Validaciones de formulario**: Campos requeridos y validaciones
- ✅ **Navegación a "Términos y Condiciones"**: Página de trabajo en progreso
- ✅ **Lazy loading de imágenes**: Verificación de carga de imágenes

#### `responsive.cy.ts`

- ✅ **Tests responsive**: Mobile (375px), Tablet (768px), Desktop (1280px)
- ✅ **Navegación en diferentes viewports**
- ✅ **Timeline adaptativo**: Mobile vs Desktop
- ✅ **Carrusel de planes responsivo**
- ✅ **Cambios dinámicos de viewport**

#### `accessibility.cy.ts`

- ✅ **Estructura HTML semántica**
- ✅ **Alt text en imágenes**
- ✅ **Navegación por teclado**
- ✅ **Focus indicators**
- ✅ **ARIA attributes**
- ✅ **Soporte para reduced motion**

## 🎯 Funcionalidades Testadas

### Flujo Principal

1. **Pantalla de carga**: Logo de Rimac con lazy loading
2. **Formulario de cotización**: DNI, teléfono, checkboxes
3. **Validaciones**: Longitud mínima, campos requeridos
4. **Navegación**: Entre páginas del flujo
5. **Selección de planes**: Carrusel responsivo
6. **Resumen**: Confirmación de datos

### Características Especiales

- **Lazy Loading**: Imágenes se cargan cuando están en viewport
- **Pantalla de carga mejorada**: Sin timeout artificial, basada en carga real
- **Página "Work in Progress"**: Para términos y condiciones
- **Animaciones**: Entrada suave con transiciones
- **Responsive**: Adaptado a móvil, tablet y desktop

## 📱 Viewports Testados

| Dispositivo | Resolución | Características                   |
| ----------- | ---------- | --------------------------------- |
| Mobile      | 375x667    | Timeline móvil, 1 card por vez    |
| Tablet      | 768x1024   | Timeline desktop, múltiples cards |
| Desktop     | 1280x720   | Vista completa, carrusel total    |

## 🔧 Configuración Técnica

### Cypress Config (`cypress.config.ts`)

- **Base URL**: `http://localhost:3000`
- **Timeouts**: 10s comandos, 10s requests/responses
- **Retries**: 2 en CI, 0 en desarrollo
- **Screenshots**: Solo en fallos
- **Videos**: Deshabilitados para velocidad

### Datos de Test (`fixtures/test-data.json`)

- Usuarios válidos e inválidos
- Selectores CSS centralizados
- Mensajes y timeouts configurables
- Viewports predefinidos

## 🎮 Cómo Ejecutar

### Desarrollo Local

1. **Iniciar servidor**:

   ```bash
   npm run start
   ```

2. **En otra terminal, ejecutar tests**:
   ```bash
   npm run cy:open
   ```

### CI/CD

```bash
npm run test:e2e
```

## 🐛 Debug

### Tests Fallando

1. **Screenshots**: Se guardan automáticamente en `cypress/screenshots/`
2. **Selectores**: Verificar que los elementos existen
3. **Timeouts**: Ajustar si la app es lenta
4. **Lazy loading**: Esperar a que las imágenes se carguen

### Problemas Comunes

- **Loading screen**: Asegurar que desaparece antes de 15s
- **Navegación**: Verificar rutas correctas
- **Responsive**: Comprobar breakpoints en CSS
- **Animaciones**: Pueden necesitar tiempo extra

## 📊 Cobertura

### Páginas Cubiertas

- ✅ Home (`/`)
- ✅ Ofertas (`/oferts-user`)
- ✅ Resumen (`/oferts-user/summary-user`)
- ✅ Work in Progress (`/work-in-progress`)

### Funcionalidades Cubiertas

- ✅ Formularios y validaciones
- ✅ Navegación entre páginas
- ✅ Lazy loading de imágenes
- ✅ Responsive design
- ✅ Accesibilidad básica
- ✅ Animaciones y transiciones

## 🚀 Próximos Pasos

1. **Component Testing**: Tests unitarios de componentes React
2. **API Testing**: Intercepción y mocking de requests
3. **Visual Testing**: Screenshots comparativos
4. **Performance Testing**: Métricas de carga y rendering
5. **Tests de integración**: Con backends reales

---

**Nota**: Los tests están diseñados para ser estables y rápidos, enfocándose en la experiencia del usuario real más que en implementaciones técnicas internas.
