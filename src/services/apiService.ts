import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { ApiError } from "../types";

// Configuración base de Axios
const baseConfig: AxiosRequestConfig = {
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

// Crear instancia de axios con configuración base
const apiClient = axios.create(baseConfig);

// Interceptor para requests
apiClient.interceptors.request.use(
  (config) => {
    // Aquí puedes agregar tokens de autenticación si es necesario
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor para responses
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      message: error.message || "Error en la solicitud",
      status: error.response?.status || 500,
      code: error.code,
    };
    return Promise.reject(apiError);
  }
);

// Método GET tipado
export const get = async <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint, config);
    return response.data;
  } catch (error) {
    const apiError = error as ApiError;
    throw new Error(apiError.message || "Error en la solicitud GET");
  }
};

// Método POST tipado
export const post = async <T, D = any>(
  endpoint: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(
      endpoint,
      data,
      config
    );
    return response.data;
  } catch (error) {
    const apiError = error as ApiError;
    throw new Error(apiError.message || "Error en la solicitud POST");
  }
};

// Método PUT tipado
export const put = async <T, D = any>(
  endpoint: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.put(
      endpoint,
      data,
      config
    );
    return response.data;
  } catch (error) {
    const apiError = error as ApiError;
    throw new Error(apiError.message || "Error en la solicitud PUT");
  }
};

// Método DELETE tipado
export const deleteRequest = async <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.delete(endpoint, config);
    return response.data;
  } catch (error) {
    const apiError = error as ApiError;
    throw new Error(apiError.message || "Error en la solicitud DELETE");
  }
};

// Método PATCH tipado
export const patch = async <T, D = any>(
  endpoint: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.patch(
      endpoint,
      data,
      config
    );
    return response.data;
  } catch (error) {
    const apiError = error as ApiError;
    throw new Error(apiError.message || "Error en la solicitud PATCH");
  }
};

// Servicio específico para los endpoints de tu backend
export const apiService = {
  // Endpoints de autenticación (si los usas)
  auth: {
    register: (data: { email: string; password: string; name: string }) =>
      post<{ token: string; user: any }>("/auth/register", data),
    login: (data: { email: string; password: string }) =>
      post<{ token: string; user: any }>("/auth/login", data),
  },

  // Endpoints de datos
  data: {
    store: (data: any) => post<any>("/data/store", data),
    getAll: () => get<any[]>("/data"),
    getById: (id: string) => get<any>(`/data/${id}`),
    delete: (id: string) => deleteRequest<void>(`/data/${id}`),
  },

  // Endpoints de fusión (integración con tu backend)
  fusion: {
    getWeather: () => get<any>("/fusion/weather"),
    getStarWars: () => get<any>("/fusion/starwars"),
    getFusedData: () => get<any>("/fusion/fuseddata"),
    getHealth: () => get<any>("/fusion/health"),
  },
};

export default apiClient;
