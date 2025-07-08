import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useApi from "../../hooks/useApi";
import { get } from "../../services/apiService";

// Mock the API service
vi.mock("../../services/apiService", () => ({
  get: vi.fn(),
}));

const mockedGet = vi.mocked(get);

describe("useApi Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with correct default values", () => {
    const { result } = renderHook(() => useApi<string>("/test-endpoint"));

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(typeof result.current.fetchData).toBe("function");
  });

  it("should fetch data successfully", async () => {
    const mockData = { id: 1, name: "Test Data" };
    mockedGet.mockResolvedValue(mockData);

    const { result } = renderHook(() =>
      useApi<typeof mockData>("/test-endpoint")
    );

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(mockedGet).toHaveBeenCalledWith("/test-endpoint");
  });

  it("should handle API errors", async () => {
    const mockError = new Error("API Error");
    mockedGet.mockRejectedValue(mockError);

    const { result } = renderHook(() => useApi<string>("/test-endpoint"));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toMatchObject({
      message: "API Error",
      status: 500,
      code: "UNKNOWN_ERROR",
    });
  });

  it("should handle null response data", async () => {
    mockedGet.mockResolvedValue(null);

    const { result } = renderHook(() => useApi<string>("/test-endpoint"));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should set loading to true when fetching data", async () => {
    const mockData = { id: 1, name: "Test" };
    mockedGet.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(mockData), 100))
    );

    const { result } = renderHook(() =>
      useApi<typeof mockData>("/test-endpoint")
    );

    act(() => {
      result.current.fetchData();
    });

    expect(result.current.loading).toBe(true);
  });

  it("should handle different data types", async () => {
    const mockArrayData = [{ id: 1 }, { id: 2 }];
    mockedGet.mockResolvedValue(mockArrayData);

    const { result } = renderHook(() =>
      useApi<typeof mockArrayData>("/test-endpoint")
    );

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual(mockArrayData);
    expect(Array.isArray(result.current.data)).toBe(true);
  });

  it("should handle string data", async () => {
    const mockStringData = "test string";
    mockedGet.mockResolvedValue(mockStringData);

    const { result } = renderHook(() => useApi<string>("/test-endpoint"));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toBe(mockStringData);
  });

  it("should handle multiple fetch calls", async () => {
    const mockData1 = { id: 1, name: "First" };
    const mockData2 = { id: 2, name: "Second" };

    mockedGet.mockResolvedValueOnce(mockData1);
    mockedGet.mockResolvedValueOnce(mockData2);

    const { result } = renderHook(() =>
      useApi<typeof mockData1>("/test-endpoint", { immediate: false })
    );

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual(mockData1);

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual(mockData2);
    expect(mockedGet).toHaveBeenCalledTimes(2);
  });

  it("should reset error state on successful fetch after error", async () => {
    const mockError = new Error("API Error");
    const mockData = { id: 1, name: "Success" };

    mockedGet.mockRejectedValueOnce(mockError);
    mockedGet.mockResolvedValueOnce(mockData);

    const { result } = renderHook(() =>
      useApi<typeof mockData>("/test-endpoint", { immediate: false })
    );

    // First call - should error
    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.error).toMatchObject({
      message: "API Error",
      status: 500,
      code: "UNKNOWN_ERROR",
    });

    // Second call - should succeed and clear error
    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
