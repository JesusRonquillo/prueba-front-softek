import { describe, it, expect } from "vitest";
import {
  selectUserName,
  selectUserData,
  selectSelectedPlan,
} from "../../redux/Selector";

describe("Redux Selectors", () => {
  const mockState = {
    user: {
      name: "John Doe",
      userData: {
        phone: "123456789",
        dni: "12345678",
      },
      selectedPlan: {
        name: "Plan Premium",
        price: 200,
        description: ["Cobertura completa", "Medicina preventiva"],
        age: 35,
      },
    },
  };

  it("should select user name", () => {
    const result = selectUserName(mockState);
    expect(result).toBe("John Doe");
  });

  it("should select user data", () => {
    const result = selectUserData(mockState);
    expect(result).toEqual({
      phone: "123456789",
      dni: "12345678",
    });
  });

  it("should select selected plan", () => {
    const result = selectSelectedPlan(mockState);
    expect(result).toEqual({
      name: "Plan Premium",
      price: 200,
      description: ["Cobertura completa", "Medicina preventiva"],
      age: 35,
    });
  });

  it("should handle empty state", () => {
    const emptyState = {
      user: {
        name: "",
        userData: {
          phone: "",
          dni: "",
        },
        selectedPlan: {
          name: "",
          price: 0,
          description: ["", "", ""],
          age: 0,
        },
      },
    };

    expect(selectUserName(emptyState)).toBe("");
    expect(selectUserData(emptyState)).toEqual({ phone: "", dni: "" });
    expect(selectSelectedPlan(emptyState)).toEqual({
      name: "",
      price: 0,
      description: ["", "", ""],
      age: 0,
    });
  });

  it("should handle partial user data", () => {
    const partialState = {
      user: {
        name: "Jane Doe",
        userData: {
          phone: "987654321",
          dni: "",
        },
        selectedPlan: {
          name: "Plan Básico",
          price: 50,
          description: ["Cobertura básica"],
          age: 25,
        },
      },
    };

    expect(selectUserName(partialState)).toBe("Jane Doe");
    expect(selectUserData(partialState)).toEqual({
      phone: "987654321",
      dni: "",
    });
    expect(selectSelectedPlan(partialState).name).toBe("Plan Básico");
  });
});
