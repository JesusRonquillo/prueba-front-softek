import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Selectores básicos
export const selectUserName = (state: RootState) => state.user.name;
export const selectUserData = (state: RootState) => state.user.userData;
export const selectSelectedPlan = (state: RootState) => state.user.selectedPlan;

// Selectores memoizados con createSelector para mejor performance
export const selectUserFullData = createSelector(
  [selectUserName, selectUserData],
  (name, userData) => ({
    name,
    ...userData,
  })
);

export const selectPlanWithUserInfo = createSelector(
  [selectSelectedPlan, selectUserName],
  (plan, userName) => ({
    ...plan,
    selectedBy: userName,
  })
);

export const selectIsUserFormComplete = createSelector(
  [selectUserData],
  (userData) => {
    return userData.phone.length >= 7 && userData.dni.length >= 6;
  }
);

export const selectIsPlanSelected = createSelector(
  [selectSelectedPlan],
  (plan) => {
    return plan.name !== "" && plan.price > 0;
  }
);

export const selectUserSummary = createSelector(
  [selectUserName, selectUserData, selectSelectedPlan],
  (name, userData, plan) => ({
    name,
    dni: userData.dni,
    phone: userData.phone,
    planName: plan.name,
    planPrice: plan.price,
    isComplete:
      name !== "" &&
      userData.dni !== "" &&
      userData.phone !== "" &&
      plan.name !== "",
  })
);

// Selector para verificar si el usuario puede proceder al siguiente paso
export const selectCanProceedToNextStep = createSelector(
  [selectIsUserFormComplete, selectIsPlanSelected],
  (isFormComplete, isPlanSelected) => {
    return isFormComplete && isPlanSelected;
  }
);
