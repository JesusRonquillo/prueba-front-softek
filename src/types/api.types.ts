// Tipos para respuestas de API
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

// Tipos para datos de planes (basado en el backend)
export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansResponse {
  list: Plan[];
}

// Tipos para integración con backend (si es necesario)
export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
