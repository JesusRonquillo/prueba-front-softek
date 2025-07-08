import React, { ChangeEvent } from "react";
import { Plan } from "./api.types";
import { UserData, SelectedPlan } from "./user.types";

// Tipos base para componentes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Atoms - Componentes atómicos
export interface ButtonProps extends BaseComponentProps {
  variant?: "back" | "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface InputProps {
  id: string;
  name: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label?: string;
  error?: string;
  className?: string;
  maxLength?: number;
}

export interface TextProps extends BaseComponentProps {
  big?: boolean;
  background?: string;
  color?: string;
  small?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
}

export interface IconProps extends BaseComponentProps {
  name: string;
  size?: number | string;
  color?: string;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  text: string;
}

export interface SpinnerProps extends BaseComponentProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export interface LinkProps extends BaseComponentProps {
  to: string;
  external?: boolean;
  disabled?: boolean;
}

export interface DashProps extends BaseComponentProps {
  length?: number;
  thickness?: number;
  color?: string;
}

// Molecules - Componentes moleculares
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
}

export interface FormGroupProps extends BaseComponentProps {
  title?: string;
  description?: string;
}

export interface CheckboxGroupProps extends BaseComponentProps {
  options: Array<{
    id: string;
    label: string;
    value: string;
    checked: boolean;
  }>;
  onChange: (value: string, checked: boolean) => void;
  name: string;
}

export interface CardSelectionProps extends BaseComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export interface PlanCardProps extends BaseComponentProps {
  backgroundImage?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface PlanDataCardProps extends BaseComponentProps {
  plan: Plan;
  isSelected?: boolean;
  onSelect?: (plan: Plan) => void;
  showRecommended?: boolean;
}

export interface LoadingScreenProps extends BaseComponentProps {
  message?: string;
  progress?: number;
}

export interface SummaryCardProps extends BaseComponentProps {
  name: string;
  lastName: string;
  dni: string | number;
  phone: string | number;
  plan: string;
  price: string | number;
}

export interface TimelineProps extends BaseComponentProps {
  activeStep: 1 | 2;
  text: string;
}

export interface TimelineMobileProps extends TimelineProps {
  // Puede extender TimelineProps si tiene propiedades adicionales
}

export interface SelectionSectionProps extends BaseComponentProps {
  title: string;
  description: string;
  options: Array<{
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  activeOption: string | null;
  onOptionSelect: (optionId: string) => void;
}

// Organisms - Componentes de organismo
export interface AppHeaderProps extends BaseComponentProps {
  showUserInfo?: boolean;
  userName?: string;
}

export interface AppFooterProps extends BaseComponentProps {
  // Agregar props específicas si las hay
}

export interface FormSectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (data: any) => void;
}

export interface PlansCarouselProps extends BaseComponentProps {
  plans: Plan[];
  selectedPlan?: SelectedPlan;
  onPlanSelect?: (plan: Plan) => void;
  userName?: string;
}

// Home Components - Componentes específicos de Home
export interface HeaderFormProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}

export interface ContainerFormProps extends BaseComponentProps {
  documentNumber: string;
  numberPhone: string;
  privacyPolicy: number;
  tradePolicy: number;
  isQuoteDisabled: boolean;
  handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCotizarClick: () => void;
  documentError?: string;
  phoneError?: string;
}

export interface FormInputsProps extends BaseComponentProps {
  documentNumber: string;
  numberPhone: string;
  handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  documentError?: string;
  phoneError?: string;
}

export interface FormChecksProps extends BaseComponentProps {
  privacyPolicy: number;
  tradePolicy: number;
  handleCotizarClick: () => void;
  isQuoteDisabled: boolean;
  handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// Páginas
export interface HomePageProps extends BaseComponentProps {
  // Props específicas de la página Home
}

export interface OffertsPageProps extends BaseComponentProps {
  // Props específicas de la página Ofertas
}

export interface LoadingPageProps extends BaseComponentProps {
  message?: string;
  redirectTo?: string;
}

export interface SummaryPageProps extends BaseComponentProps {
  userInfo?: UserData;
  selectedPlan?: SelectedPlan;
}

// Props genéricas para utilidades
export interface BackButtonProps {
  onClick: () => void;
  variant?: "default" | "floating";
}

// Props para secciones
export interface SectionInfoProps extends BaseComponentProps {
  name: string;
  onCardClick?: () => void;
  dataPlans: Plan[];
}
