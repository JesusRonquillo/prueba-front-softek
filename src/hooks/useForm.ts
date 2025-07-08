import { useState, useCallback, FormEvent } from "react";
import { ValidatorFunction, FormInputEvent, FormCheckboxEvent } from "../types";

// Tipo genérico para valores de formulario
type FormValues = Record<string, any>;

// Opciones para el hook
interface UseFormOptions<T extends FormValues> {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit?: (values: T) => void | Promise<void>;
}

// Resultado del hook
interface UseFormResult<T extends FormValues> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (event: FormInputEvent | FormCheckboxEvent) => void;
  handleBlur: (fieldName: keyof T) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setFieldValue: (fieldName: keyof T, value: any) => void;
  setFieldError: (fieldName: keyof T, error: string) => void;
  setFieldTouched: (fieldName: keyof T, touched?: boolean) => void;
  resetForm: () => void;
  validateField: (fieldName: keyof T) => void;
  validateForm: () => boolean;
}

export const useForm = <T extends FormValues>(
  options: UseFormOptions<T>
): UseFormResult<T> => {
  const { initialValues, validate, onSubmit } = options;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validar un campo específico
  const validateField = useCallback(
    (fieldName: keyof T) => {
      if (validate) {
        const fieldErrors = validate(values);
        const fieldError = fieldErrors[fieldName];

        setErrors((prev) => ({
          ...prev,
          [fieldName]: fieldError || undefined,
        }));
      }
    },
    [values, validate]
  );

  // Validar todo el formulario
  const validateForm = useCallback((): boolean => {
    if (validate) {
      const formErrors = validate(values);
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    }
    return true;
  }, [values, validate]);

  // Verificar si el formulario es válido
  const isValid = Object.keys(errors).length === 0;

  // Manejar cambios en inputs
  const handleChange = useCallback(
    (event: FormInputEvent | FormCheckboxEvent) => {
      const { name, type } = event.target;
      const value =
        type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : (event.target as HTMLInputElement).value;

      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Validar el campo si ya fue tocado
      if (touched[name as keyof T]) {
        setTimeout(() => validateField(name as keyof T), 0);
      }
    },
    [touched, validateField]
  );

  // Manejar blur (cuando el usuario sale del campo)
  const handleBlur = useCallback(
    (fieldName: keyof T) => {
      setTouched((prev) => ({
        ...prev,
        [fieldName]: true,
      }));
      validateField(fieldName);
    },
    [validateField]
  );

  // Manejar envío del formulario
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isFormValid = validateForm();

      // Marcar todos los campos como tocados
      const allTouched = Object.keys(values).reduce(
        (acc, key) => ({
          ...acc,
          [key]: true,
        }),
        {}
      );
      setTouched(allTouched);

      if (isFormValid && onSubmit) {
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } catch (error) {
          console.error("Error al enviar formulario:", error);
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [values, validateForm, onSubmit]
  );

  // Establecer valor de un campo
  const setFieldValue = useCallback((fieldName: keyof T, value: any) => {
    setValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  }, []);

  // Establecer error de un campo
  const setFieldError = useCallback((fieldName: keyof T, error: string) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  }, []);

  // Establecer si un campo fue tocado
  const setFieldTouched = useCallback(
    (fieldName: keyof T, touched: boolean = true) => {
      setTouched((prev) => ({
        ...prev,
        [fieldName]: touched,
      }));
    },
    []
  );

  // Resetear formulario
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    resetForm,
    validateField,
    validateForm,
  };
};

// Hook específico para validaciones comunes
export const useFormValidation = () => {
  const required =
    (message: string = "Este campo es requerido"): ValidatorFunction =>
    (value: string) =>
      !value || value.trim() === "" ? message : null;

  const email =
    (message: string = "Email inválido"): ValidatorFunction =>
    (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return value && !emailRegex.test(value) ? message : null;
    };

  const minLength =
    (min: number, message?: string): ValidatorFunction =>
    (value: string) => {
      const defaultMessage = `Debe tener al menos ${min} caracteres`;
      return value && value.length < min ? message || defaultMessage : null;
    };

  const maxLength =
    (max: number, message?: string): ValidatorFunction =>
    (value: string) => {
      const defaultMessage = `No debe exceder ${max} caracteres`;
      return value && value.length > max ? message || defaultMessage : null;
    };

  const pattern =
    (regex: RegExp, message: string = "Formato inválido"): ValidatorFunction =>
    (value: string) =>
      value && !regex.test(value) ? message : null;

  const numeric =
    (message: string = "Solo se permiten números"): ValidatorFunction =>
    (value: string) =>
      value && !/^\d+$/.test(value) ? message : null;

  return {
    required,
    email,
    minLength,
    maxLength,
    pattern,
    numeric,
  };
};

export default useForm;
