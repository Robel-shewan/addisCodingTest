import { createSelector } from "reselect";

import { EmployeeState } from "./types";

const getEmployeeListPending = (state: EmployeeState) => state.loading;

const getEmployeeListSuccess = (state: EmployeeState) => state.employees;

const getEmployeeListError = (state: EmployeeState) => state.error;

export const getEmployeeListSelector = createSelector(
  getEmployeeListSuccess,
  (employees) => employees
);

export const getemployeeListPendingSelector = createSelector(
  getEmployeeListPending,
  (loading) => loading
);

export const getEmployeeListErrorSelector = createSelector(
  getEmployeeListError,
  (error) => error
);
