import { ChangeEvent, FormEvent } from "react";

// Tipos para validación de formularios
export interface FormValidation {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FormField {
  value: string;
  error?: string;
  isValid: boolean;
  isDirty: boolean;
  isTouched: boolean;
}

// Tipos para el formulario de Home
export interface HomeFormData {
  documentNumber: string;
  numberPhone: string;
  privacyPolicy: boolean;
  tradePolicy: boolean;
}

export interface HomeFormState {
  documentNumber: FormField;
  numberPhone: FormField;
  privacyPolicy: FormField;
  tradePolicy: FormField;
  isSubmitting: boolean;
  isValid: boolean;
}

// Tipos para eventos de formulario
export interface FormInputEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string;
    value: string;
  };
}

export interface FormCheckboxEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string;
    checked: boolean;
  };
}

export interface FormSubmitEvent extends FormEvent<HTMLFormElement> {
  preventDefault: () => void;
}

// Tipos para validadores
export type ValidatorFunction = (value: string) => string | null;

export interface ValidationRule {
  validator: ValidatorFunction;
  message: string;
}

export interface FieldValidationRules {
  [fieldName: string]: ValidationRule[];
}

// Tipos para manejadores de formulario
export interface FormHandlers {
  handleInputChange: (event: FormInputEvent) => void;
  handleCheckboxChange: (event: FormCheckboxEvent) => void;
  handleSubmit: (event: FormSubmitEvent) => void;
  handleReset: () => void;
  validateField: (fieldName: string, value: string) => string | null;
  validateForm: () => boolean;
}

// Tipos para configuración de campos
export interface FieldConfig {
  type: "text" | "number" | "email" | "password" | "tel" | "checkbox";
  label?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
  validators?: ValidationRule[];
}

export interface FormConfig {
  [fieldName: string]: FieldConfig;
}

// Tipos para hooks de formulario
export interface UseFormOptions {
  initialValues: Record<string, any>;
  validationRules?: FieldValidationRules;
  onSubmit?: (values: Record<string, any>) => void;
}

export interface UseFormReturn {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (event: FormInputEvent | FormCheckboxEvent) => void;
  handleBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormSubmitEvent) => void;
  handleReset: () => void;
  setFieldValue: (field: string, value: any) => void;
  setFieldError: (field: string, error: string) => void;
  validateField: (field: string) => void;
  validateForm: () => boolean;
}
