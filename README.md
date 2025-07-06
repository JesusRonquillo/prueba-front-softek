# Prueba Técnica - Aplicación de Seguros

Una aplicación web moderna desarrollada con React, TypeScript y Vite que permite a los usuarios cotizar y seleccionar planes de seguro.

## 🚀 Características

- **Formulario de cotización**: Interfaz intuitiva para ingresar datos personales
- **Selección de planes**: Carousel interactivo para elegir entre diferentes opciones de seguro
- **Resumen de compra**: Vista detallada del plan seleccionado antes de la confirmación
- **Responsive Design**: Optimizado para dispositivos móviles y desktop
- **Arquitectura escalable**: Componentes organizados siguiendo principios de Atomic Design

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Build tool moderno y rápido
- **Redux Toolkit** - Gestión de estado global
- **React Router Dom** - Navegación entre páginas
- **Sass** - Preprocesador CSS para estilos avanzados
- **Vitest** - Framework de testing moderno
- **Axios** - Cliente HTTP para peticiones API

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/prueba-tecnica.git

# Navegar al directorio del proyecto
cd prueba-tecnica

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start
```

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run start      # Ejecutar en modo desarrollo (puerto 3000)
npm run dev        # Ejecutar con Vite dev server

# Construcción
npm run build      # Construir para producción
npm run preview    # Previsualizar build de producción

# Testing
npm run test       # Ejecutar tests en modo watch
npm run test:ui    # Ejecutar tests con interfaz gráfica
npm run test:run   # Ejecutar tests una vez
npm run coverage   # Ejecutar tests con reporte de cobertura

# Linting
npm run lint       # Verificar código con ESLint
```

## 🏗️ Estructura del Proyecto

```
prueba-tecnica/
├── public/                          # Archivos estáticos
├── src/
│   ├── assets/                      # Recursos (imágenes, iconos)
│   │   ├── images/
│   │   └── *.svg
│   ├── components/                  # Componentes reutilizables
│   │   ├── atoms/                   # Componentes básicos
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Checkbox/
│   │   │   └── ...
│   │   ├── molecules/               # Componentes compuestos
│   │   │   ├── FormField/
│   │   │   ├── PlanCard/
│   │   │   ├── Timeline/
│   │   │   └── ...
│   │   ├── organisms/               # Componentes complejos
│   │   │   ├── AppHeader/
│   │   │   ├── AppFooter/
│   │   │   └── FormSection/
│   │   └── Home/                    # Componentes específicos del Home
│   ├── fonts/                       # Fuentes personalizadas
│   ├── hooks/                       # Custom hooks
│   │   └── useApi.ts
│   ├── pages/                       # Páginas principales
│   │   ├── Home.tsx
│   │   ├── Loading.tsx
│   │   ├── Oferts.tsx
│   │   └── Summary.tsx
│   ├── redux/                       # Gestión de estado
│   │   ├── store.ts
│   │   ├── userSlice.ts
│   │   └── Selector.ts
│   ├── sections/                    # Secciones de página
│   │   ├── Information.tsx
│   │   └── Plans.tsx
│   ├── services/                    # Servicios API
│   │   └── apiService.ts
│   ├── styles/                      # Estilos globales
│   │   ├── variables.scss
│   │   └── pages.scss
│   ├── test/                        # Pruebas unitarias
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── redux/
│   │   └── services/
│   └── types/                       # Definiciones de tipos
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Arquitectura de Componentes

El proyecto sigue los principios de **Atomic Design**:

### Atoms (Componentes Básicos)

- `Button` - Botones con diferentes variantes
- `Input` - Campos de entrada
- `Checkbox` - Casillas de verificación
- `Text` - Elementos de texto tipográficos
- `Icon` - Iconos SVG
- `Spinner` - Indicadores de carga

### Molecules (Componentes Compuestos)

- `FormField` - Campo de formulario con label y validación
- `PlanCard` - Tarjeta de plan de seguro
- `Timeline` - Indicador de progreso
- `SummaryCard` - Tarjeta resumen de compra

### Organisms (Componentes Complejos)

- `AppHeader` - Encabezado de la aplicación
- `AppFooter` - Pie de página
- `FormSection` - Sección completa de formulario
- `PlansCarousel` - Carousel de planes de seguro

## 🔄 Flujo de la Aplicación

1. **Home**: Formulario de datos personales y términos
2. **Loading**: Pantalla de carga mientras se procesan los datos
3. **Ofertas**: Selección de planes de seguro disponibles
4. **Resumen**: Confirmación y resumen de la compra

## 🧪 Testing

El proyecto incluye pruebas unitarias para:

- Componentes individuales
- Hooks personalizados
- Redux store y slices
- Servicios API

```bash
# Ejecutar todas las pruebas
npm run test

# Ver cobertura de código
npm run coverage
```

## 🌐 Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=https://api.ejemplo.com
```

## 📱 Responsive Design

La aplicación está optimizada para:

- **Desktop**: Experiencia completa con sidebar y layouts amplios
- **Mobile**: Interfaz adaptada con navegación optimizada para táctil
- **Tablet**: Diseño híbrido que aprovecha el espacio disponible

## 🚀 Deployment

```bash
# Construir para producción
npm run build

# Los archivos se generan en la carpeta 'dist'
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte de una prueba técnica.

## 📚 Documentación de Componentes

### Atomic Components (Atoms)

#### Button

Componente básico para botones con diferentes variantes.

```tsx
import { Button } from '../components/atoms';

// Uso básico
<Button onClick={() => console.log('Click!')}>
  Texto del botón
</Button>

// Botón de retroceso
<Button variant="back" onClick={() => navigate(-1)}>
  Volver
</Button>

// Botón secundario
<Button variant="secondary" disabled={false}>
  Continuar
</Button>
```

**Props:**

- `variant`: `'back' | 'primary' | 'secondary'` - Estilo del botón
- `onClick`: `() => void` - Función ejecutada al hacer clic
- `children`: `React.ReactNode` - Contenido del botón
- `disabled`: `boolean` - Si el botón está deshabilitado
- `className`: `string` - Clases CSS adicionales

#### Input

Campo de entrada con validación y etiquetas.

```tsx
import { Input } from "../components/atoms";

<Input
  id="email"
  name="email"
  type="email"
  placeholder="ejemplo@correo.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  label="Correo electrónico"
  required
  error={emailError}
/>;
```

**Props:**

- `id`: `string` - ID único del input
- `name`: `string` - Nombre del campo
- `type`: `'text' | 'number' | 'email' | 'password'` - Tipo de input
- `placeholder`: `string` - Texto de marcador de posición
- `value`: `string` - Valor del input
- `onChange`: `(event: ChangeEvent<HTMLInputElement>) => void` - Función de cambio
- `required`: `boolean` - Si el campo es obligatorio
- `label`: `string` - Etiqueta del campo
- `error`: `string` - Mensaje de error
- `className`: `string` - Clases CSS adicionales

#### Checkbox

Casilla de verificación con etiqueta personalizada.

```tsx
import { Checkbox } from "../components/atoms";

<Checkbox
  id="privacy"
  name="privacy"
  checked={privacyAccepted}
  onChange={(e) => setPrivacyAccepted(e.target.checked)}
  label="Acepto la Política de Privacidad"
  required
/>;
```

**Props:**

- `id`: `string` - ID único del checkbox
- `name`: `string` - Nombre del campo
- `checked`: `boolean` - Estado del checkbox
- `onChange`: `(event: ChangeEvent<HTMLInputElement>) => void` - Función de cambio
- `label`: `string` - Etiqueta del checkbox
- `required`: `boolean` - Si el campo es obligatorio
- `className`: `string` - Clases CSS adicionales

#### Text

Componente tipográfico con múltiples variantes.

```tsx
import { Text } from '../components/atoms';

<Text variant="heading" weight={700} color="#333">
  Título principal
</Text>

<Text variant="body" align="center" centerOnMobile>
  Texto del párrafo
</Text>

<Text variant="caption" size="12px" color="#666">
  Texto pequeño
</Text>
```

**Props:**

- `children`: `ReactNode` - Contenido del texto
- `variant`: `'heading' | 'subheading' | 'body' | 'caption' | 'label'` - Variante tipográfica
- `size`: `string` - Tamaño de fuente personalizado
- `weight`: `100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900` - Peso de fuente
- `color`: `string` - Color del texto
- `lineHeight`: `string` - Altura de línea
- `letterSpacing`: `string` - Espaciado entre letras
- `align`: `'left' | 'center' | 'right'` - Alineación del texto
- `className`: `string` - Clases CSS adicionales
- `centerOnMobile`: `boolean` - Si se centra en móvil

### Molecular Components (Molecules)

#### FormField

Campo de formulario especializado para documento y teléfono.

```tsx
import { FormField } from '../components/molecules';

// Campo de documento
<FormField
  type="document"
  value={dni}
  onChange={(e) => setDni(e.target.value)}
/>

// Campo de teléfono
<FormField
  type="phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>
```

**Props:**

- `type`: `'document' | 'phone'` - Tipo de campo
- `value`: `string` - Valor del campo
- `onChange`: `(event: ChangeEvent<HTMLInputElement>) => void` - Función de cambio
- `className`: `string` - Clases CSS adicionales

#### PlanCard

Tarjeta de plan de seguro con selección.

```tsx
import { PlanCard } from "../components/molecules";

<PlanCard
  title="Plan Básico"
  description="Cobertura esencial para tu familia"
  icon={<Icon src={iconBasic} alt="Plan Básico" />}
  isActive={selectedPlan === "basic"}
  onClick={() => setSelectedPlan("basic")}
/>;
```

**Props:**

- `backgroundImage`: `string` - Imagen de fondo
- `icon`: `React.ReactNode` - Icono del plan
- `title`: `string` - Título del plan
- `description`: `string` - Descripción del plan
- `onClick`: `() => void` - Función al hacer clic
- `isActive`: `boolean` - Si el plan está seleccionado
- `className`: `string` - Clases CSS adicionales

#### SummaryCard

Tarjeta resumen de compra con información del usuario y plan.

```tsx
import { SummaryCard } from "../components/molecules";

<SummaryCard
  name="Juan"
  lastName="Pérez"
  dni="12345678"
  phone="987654321"
  plan="Plan Básico"
  price="150"
/>;
```

**Props:**

- `name`: `string` - Nombre del usuario
- `lastName`: `string` - Apellido del usuario
- `dni`: `string` - DNI del usuario
- `phone`: `string` - Teléfono del usuario
- `plan`: `string` - Nombre del plan
- `price`: `string` - Precio del plan
- `className`: `string` - Clases CSS adicionales

#### Timeline

Indicador de progreso de pasos.

```tsx
import { Timeline } from '../components/molecules';

<Timeline activeStep={1} text="Información personal" />
<Timeline activeStep={2} text="Selección de plan" />
```

**Props:**

- `activeStep`: `number` - Número del paso activo
- `text`: `string` - Texto del paso
- `className`: `string` - Clases CSS adicionales

## 🗃️ Documentación de Redux

### Store Configuration

El store está configurado con Redux Toolkit para gestionar el estado global.

```tsx
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

### User Slice

Maneja el estado del usuario y plan seleccionado.

```tsx
import { useSelector, useDispatch } from "react-redux";
import { addUser, addUserData, addSelectedPlan } from "../redux/userSlice";
import {
  selectUserName,
  selectUserData,
  selectSelectedPlan,
} from "../redux/Selector";

const Component = () => {
  const dispatch = useDispatch();

  // Obtener datos del estado
  const userName = useSelector(selectUserName);
  const userData = useSelector(selectUserData);
  const selectedPlan = useSelector(selectSelectedPlan);

  // Actualizar estado
  const handleAddUser = () => {
    dispatch(addUser({ name: "Juan Pérez" }));
  };

  const handleAddUserData = () => {
    dispatch(addUserData({ dni: "12345678", phone: "987654321" }));
  };

  const handleAddSelectedPlan = () => {
    dispatch(
      addSelectedPlan({
        name: "Plan Básico",
        price: 150,
        description: ["Cobertura básica", "Consultas médicas", "Emergencias"],
        age: 30,
      })
    );
  };
};
```

### Actions

#### addUser

Actualiza el nombre del usuario.

```tsx
dispatch(addUser({ name: string }));
```

#### addUserData

Actualiza los datos personales del usuario.

```tsx
dispatch(addUserData({ dni: string, phone: string }));
```

#### addSelectedPlan

Actualiza el plan seleccionado.

```tsx
dispatch(addSelectedPlan({
  name: string,
  price: number,
  description: string[],
  age: number
}));
```

### Selectors

#### selectUserName

Obtiene el nombre del usuario.

```tsx
const userName = useSelector(selectUserName);
```

#### selectUserData

Obtiene los datos personales del usuario.

```tsx
const userData = useSelector(selectUserData);
// userData = { phone: string, dni: string }
```

#### selectSelectedPlan

Obtiene el plan seleccionado.

```tsx
const selectedPlan = useSelector(selectSelectedPlan);
// selectedPlan = { name: string, price: number, description: string[], age: number }
```

### Estado Inicial

```tsx
const initialState = {
  name: "",
  userData: {
    phone: "",
    dni: "",
  },
  selectedPlan: {
    name: "",
    price: 0,
    description: ["", "", ""],
    age: 0,
  },
};
```

## 🌐 Documentación de API y Hooks

### API Service

Servicio genérico para realizar peticiones HTTP.

```tsx
import { get } from "../services/apiService";

// Realizar petición GET
const fetchUserData = async () => {
  try {
    const data = await get<UserData>("/api/user.json");
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
```

### Hook useApi

Hook personalizado para gestionar peticiones API con estado.

```tsx
import useApi from "../hooks/useApi";

const Component = () => {
  const { data, loading, error, fetchData } =
    useApi<UserData>("/api/user.json");

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  );
};
```

**Retorna:**

- `data`: `T | null` - Datos de la respuesta
- `loading`: `boolean` - Estado de carga
- `error`: `Error | null` - Error de la petición
- `fetchData`: `() => Promise<void>` - Función para ejecutar la petición

### Manejo de Errores

El servicio API maneja automáticamente los errores y proporciona mensajes descriptivos.

```tsx
// Error personalizado
throw new Error(error.response?.data?.message || "Error en la solicitud");
```

### Tipos TypeScript

```tsx
interface UserData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}

interface PlanData {
  name: string;
  price: number;
  description: string[];
  age: number;
}
```

## 🔧 Patrones de Uso Comunes

### Formulario con Validación

```tsx
import { useState } from "react";
import { Input, Button, FormField } from "../components";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    phone: "",
  });

  const handleSubmit = () => {
    // Validación y envío
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        label="Nombre completo"
        required
      />
      <FormField
        type="document"
        value={formData.dni}
        onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
      />
      <FormField
        type="phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
};
```

### Manejo de Estado con Redux

```tsx
import { useSelector, useDispatch } from "react-redux";
import { addUserData, addSelectedPlan } from "../redux/userSlice";
import { selectUserData, selectSelectedPlan } from "../redux/Selector";

const InsuranceFlow = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const selectedPlan = useSelector(selectSelectedPlan);

  const handleUserDataSubmit = (data) => {
    dispatch(addUserData(data));
  };

  const handlePlanSelection = (plan) => {
    dispatch(addSelectedPlan(plan));
  };

  return <div>{/* Componentes del flujo */}</div>;
};
```

---

Desarrollado con ❤️ usando React y TypeScript
