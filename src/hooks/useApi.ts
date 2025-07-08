import { useState, useEffect, useCallback } from "react";
import { get } from "../services/apiService";
import { ApiError } from "../types";

// Interfaz para el estado del hook
interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

// Opciones para el hook
interface UseApiOptions {
  immediate?: boolean; // Si debe ejecutarse inmediatamente
  onSuccess?: (data: any) => void;
  onError?: (error: ApiError) => void;
}

// Hook tipado para APIs
const useApi = <T>(
  endpoint: string,
  options: UseApiOptions = {}
): {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  fetchData: () => Promise<void>;
  refetch: () => Promise<void>;
  clearError: () => void;
  clearData: () => void;
} => {
  const { immediate = true, onSuccess, onError } = options;

  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const responseData: T = await get<T>(endpoint);

      setState((prev) => ({
        ...prev,
        data: responseData,
        loading: false,
      }));

      if (onSuccess) {
        onSuccess(responseData);
      }
    } catch (error) {
      const apiError: ApiError = {
        message: error instanceof Error ? error.message : "Error desconocido",
        status: 500,
        code: "UNKNOWN_ERROR",
      };

      setState((prev) => ({
        ...prev,
        error: apiError,
        loading: false,
      }));

      if (onError) {
        onError(apiError);
      }
    }
  }, [endpoint, onSuccess, onError]);

  const refetch = useCallback(async (): Promise<void> => {
    await fetchData();
  }, [fetchData]);

  const clearError = useCallback((): void => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const clearData = useCallback((): void => {
    setState((prev) => ({ ...prev, data: null }));
  }, []);

  // Ejecutar automáticamente si immediate es true
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    fetchData,
    refetch,
    clearError,
    clearData,
  };
};

// Hook específico para casos comunes
export const useApiWithRetry = <T>(
  endpoint: string,
  maxRetries: number = 3,
  retryDelay: number = 1000
) => {
  const [retryCount, setRetryCount] = useState(0);

  const { data, loading, error, fetchData, ...rest } = useApi<T>(endpoint, {
    immediate: false,
    onError: () => {
      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
          fetchData();
        }, retryDelay);
      }
    },
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    fetchData,
    retryCount,
    hasExceededRetries: retryCount >= maxRetries,
    ...rest,
  };
};

// Hook para paginación
export const usePaginatedApi = <T>(endpoint: string, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState<T[]>([]);

  const paginatedEndpoint = `${endpoint}?page=${currentPage}&limit=${pageSize}`;

  const { data, loading, error, fetchData } = useApi<{
    data: T[];
    pagination: {
      page: number;
      totalPages: number;
      hasNext: boolean;
      hasPrevious: boolean;
    };
  }>(paginatedEndpoint);

  const loadNextPage = useCallback(() => {
    if (data?.pagination.hasNext) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [data?.pagination.hasNext]);

  const loadPreviousPage = useCallback(() => {
    if (data?.pagination.hasPrevious) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [data?.pagination.hasPrevious]);

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
    setAllData([]);
  }, []);

  useEffect(() => {
    if (data?.data) {
      if (currentPage === 1) {
        setAllData(data.data);
      } else {
        setAllData((prev) => [...prev, ...data.data]);
      }
    }
  }, [data, currentPage]);

  return {
    data: allData,
    currentPage,
    pagination: data?.pagination,
    loading,
    error,
    loadNextPage,
    loadPreviousPage,
    resetPagination,
    refetch: fetchData,
  };
};

export default useApi;
