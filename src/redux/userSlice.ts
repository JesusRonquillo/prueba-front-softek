import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserState,
  AddUserPayload,
  AddUserDataPayload,
  AddSelectedPlanPayload,
} from "../types";

const initialState: UserState = {
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AddUserPayload>) => {
      const { name } = action.payload;
      state.name = name;
    },
    addUserData: (state, action: PayloadAction<AddUserDataPayload>) => {
      const { dni, phone } = action.payload;
      state.userData.dni = dni;
      state.userData.phone = phone;
    },
    addSelectedPlan: (state, action: PayloadAction<AddSelectedPlanPayload>) => {
      const { name, price, description, age } = action.payload;
      state.selectedPlan.name = name;
      state.selectedPlan.price = price;
      state.selectedPlan.description = description;
      state.selectedPlan.age = age;
    },
    clearUser: (state) => {
      state.name = "";
      state.userData = { phone: "", dni: "" };
      state.selectedPlan = {
        name: "",
        price: 0,
        description: ["", "", ""],
        age: 0,
      };
    },
  },
});

export const { addUser, addUserData, addSelectedPlan, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
