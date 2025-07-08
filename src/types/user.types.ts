import { Plan } from "./api.types";

// Tipos para datos del usuario
export interface UserData {
  phone: string;
  dni: string;
}

export interface UserFormData extends UserData {
  name?: string;
  lastName?: string;
  birthDay?: string;
}

// Tipos para el plan seleccionado (extendiendo Plan)
export interface SelectedPlan extends Plan {
  // Podemos agregar propiedades adicionales si es necesario
}

// Tipos para el estado de Redux
export interface UserState {
  name: string;
  userData: UserData;
  selectedPlan: SelectedPlan;
}

// Tipo para el RootState de Redux
export interface RootState {
  user: UserState;
}

// Tipos para actions de Redux
export interface AddUserPayload {
  name: string;
}

export interface AddUserDataPayload {
  dni: string;
  phone: string;
}

export interface AddSelectedPlanPayload {
  name: string;
  price: number;
  description: string[];
  age: number;
}
