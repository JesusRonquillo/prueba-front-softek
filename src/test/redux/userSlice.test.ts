import { describe, it, expect } from "vitest";
import userReducer, {
  addUserData,
  addUser,
  addSelectedPlan,
} from "../../redux/userSlice";

const initialState = {
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
};

describe("userSlice", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addUserData", () => {
    const userData = { phone: "123456789", dni: "12345678" };
    const actual = userReducer(initialState, addUserData(userData));

    expect(actual.userData).toEqual(userData);
  });

  it("should handle addUser", () => {
    const user = { name: "John Doe" };
    const actual = userReducer(initialState, addUser(user));

    expect(actual.name).toBe("John Doe");
  });

  it("should handle addSelectedPlan", () => {
    const plan = {
      name: "Plan Básico",
      price: 50,
      description: ["Cobertura básica"],
      age: 25,
    };
    const actual = userReducer(initialState, addSelectedPlan(plan));

    expect(actual.selectedPlan).toEqual(plan);
  });

  it("should update userData without affecting other state", () => {
    const existingState = {
      ...initialState,
      name: "Jane Doe",
    };

    const userData = { phone: "987654321", dni: "87654321" };
    const actual = userReducer(existingState, addUserData(userData));

    expect(actual.userData).toEqual(userData);
    expect(actual.name).toBe("Jane Doe");
  });

  it("should handle multiple actions in sequence", () => {
    let state = userReducer(
      initialState,
      addUserData({ phone: "123", dni: "456" })
    );
    state = userReducer(state, addUser({ name: "Test User" }));
    state = userReducer(
      state,
      addSelectedPlan({
        name: "Test Plan",
        price: 100,
        description: ["Test"],
        age: 30,
      })
    );

    expect(state.userData).toEqual({ phone: "123", dni: "456" });
    expect(state.name).toBe("Test User");
    expect(state.selectedPlan.price).toBe(100);
  });

  it("should handle partial plan updates", () => {
    const plan = {
      name: "Plan Completo",
      price: 150,
      description: ["Cobertura completa", "Medicina preventiva", "Emergencias"],
      age: 30,
    };
    const actual = userReducer(initialState, addSelectedPlan(plan));

    expect(actual.selectedPlan.name).toBe("Plan Completo");
    expect(actual.selectedPlan.price).toBe(150);
    expect(actual.selectedPlan.description).toEqual([
      "Cobertura completa",
      "Medicina preventiva",
      "Emergencias",
    ]);
    expect(actual.selectedPlan.age).toBe(30);
  });

  it("should handle empty userData", () => {
    const userData = { phone: "", dni: "" };
    const actual = userReducer(initialState, addUserData(userData));

    expect(actual.userData).toEqual(userData);
  });

  it("should preserve other state when updating name", () => {
    const existingState = {
      ...initialState,
      userData: { phone: "123", dni: "456" },
      selectedPlan: {
        name: "Existing Plan",
        price: 100,
        description: ["Test"],
        age: 25,
      },
    };

    const actual = userReducer(existingState, addUser({ name: "New Name" }));

    expect(actual.name).toBe("New Name");
    expect(actual.userData).toEqual({ phone: "123", dni: "456" });
    expect(actual.selectedPlan.name).toBe("Existing Plan");
  });
});
