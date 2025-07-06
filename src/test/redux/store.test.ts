import { describe, it, expect } from "vitest";
import { store } from "../../redux/store";
import { addUser, addUserData, addSelectedPlan } from "../../redux/userSlice";

describe("Redux Store", () => {
  it("should have initial state", () => {
    const state = store.getState();

    expect(state.user).toEqual({
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
    });
  });

  it("should dispatch addUser action", () => {
    store.dispatch(addUser({ name: "John Doe" }));
    const state = store.getState();

    expect(state.user.name).toBe("John Doe");
  });

  it("should dispatch addUserData action", () => {
    store.dispatch(addUserData({ phone: "123456789", dni: "12345678" }));
    const state = store.getState();

    expect(state.user.userData).toEqual({
      phone: "123456789",
      dni: "12345678",
    });
  });

  it("should dispatch addSelectedPlan action", () => {
    const plan = {
      name: "Plan Premium",
      price: 200,
      description: ["Cobertura completa", "Medicina preventiva"],
      age: 35,
    };

    store.dispatch(addSelectedPlan(plan));
    const state = store.getState();

    expect(state.user.selectedPlan).toEqual(plan);
  });

  it("should handle multiple dispatches", () => {
    // Reset state by dispatching empty values
    store.dispatch(addUser({ name: "" }));
    store.dispatch(addUserData({ phone: "", dni: "" }));

    // Dispatch multiple actions
    store.dispatch(addUser({ name: "Test User" }));
    store.dispatch(addUserData({ phone: "987654321", dni: "87654321" }));
    store.dispatch(
      addSelectedPlan({
        name: "Test Plan",
        price: 100,
        description: ["Test coverage"],
        age: 25,
      })
    );

    const state = store.getState();

    expect(state.user.name).toBe("Test User");
    expect(state.user.userData.phone).toBe("987654321");
    expect(state.user.selectedPlan.name).toBe("Test Plan");
  });
});
