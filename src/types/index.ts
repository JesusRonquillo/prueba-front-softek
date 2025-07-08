// Exportar todos los tipos de API
export * from "./api.types";

// Exportar todos los tipos de usuario y Redux
export * from "./user.types";
import type { UserState, UserData } from "./user.types";

// Exportar todos los tipos de componentes
export * from "./components.types";

// Exportar todos los tipos de formularios
export * from "./forms.types";

// Tipos adicionales útiles
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Tipos para navegación (si usas React Router)
export interface RouteParams {
  [key: string]: string | undefined;
}

export interface NavigationState {
  from?: string;
  data?: any;
}

// Tipos para el estado de la aplicación
export interface AppState {
  isLoading: boolean;
  error: string | null;
  currentStep: number;
  isAuthenticated: boolean;
}

// Tipos para configuración global
export interface AppConfig {
  apiBaseUrl: string;
  environment: "development" | "staging" | "production";
  version: string;
}

// Tipos para manejo de errores
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

// Tipos para contextos de React
export interface ThemeContextValue {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface UserContextValue {
  user: UserState | null;
  login: (userData: UserData) => void;
  logout: () => void;
  updateUser: (userData: Partial<UserData>) => void;
}
