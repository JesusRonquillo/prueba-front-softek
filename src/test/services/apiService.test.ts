import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { get } from "../../services/apiService";

// Mock axios
vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
  },
}));

const mockedAxios = axios as any;

describe("API Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("get function", () => {
    it("should return data on successful request", async () => {
      const mockData = { id: 1, name: "Test Data" };
      const mockResponse = { data: mockData };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await get<typeof mockData>("/test-endpoint");

      expect(mockedAxios.get).toHaveBeenCalledWith("/test-endpoint");
      expect(result).toEqual(mockData);
    });

    it("should throw error on failed request with response message", async () => {
      const errorMessage = "Server error";
      const mockError = {
        response: {
          data: {
            message: errorMessage,
          },
        },
      };

      mockedAxios.get.mockRejectedValue(mockError);

      await expect(get("/test-endpoint")).rejects.toThrow(errorMessage);
      expect(mockedAxios.get).toHaveBeenCalledWith("/test-endpoint");
    });

    it("should throw default error message when no response message", async () => {
      const mockError = {
        response: {
          data: {},
        },
      };

      mockedAxios.get.mockRejectedValue(mockError);

      await expect(get("/test-endpoint")).rejects.toThrow(
        "Error en la solicitud"
      );
    });

    it("should throw default error message when no response", async () => {
      const mockError = new Error("Network Error");

      mockedAxios.get.mockRejectedValue(mockError);

      await expect(get("/test-endpoint")).rejects.toThrow(
        "Error en la solicitud"
      );
    });

    it("should handle different data types", async () => {
      const mockArrayData = [{ id: 1 }, { id: 2 }];
      const mockResponse = { data: mockArrayData };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await get<typeof mockArrayData>("/test-array-endpoint");

      expect(result).toEqual(mockArrayData);
      expect(Array.isArray(result)).toBe(true);
    });

    it("should handle string data", async () => {
      const mockStringData = "test string";
      const mockResponse = { data: mockStringData };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await get<string>("/test-string-endpoint");

      expect(result).toBe(mockStringData);
    });

    it("should handle null data", async () => {
      const mockResponse = { data: null };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await get<null>("/test-null-endpoint");

      expect(result).toBeNull();
    });

    it("should handle complex nested objects", async () => {
      const mockComplexData = {
        user: {
          id: 1,
          name: "John",
          preferences: {
            theme: "dark",
            notifications: true,
          },
        },
        plans: [
          { id: 1, name: "Basic" },
          { id: 2, name: "Premium" },
        ],
      };
      const mockResponse = { data: mockComplexData };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await get<typeof mockComplexData>(
        "/test-complex-endpoint"
      );

      expect(result).toEqual(mockComplexData);
      expect(result.user.name).toBe("John");
      expect(result.plans).toHaveLength(2);
    });
  });
});
