import { EmployeeActions, EmployeeState } from "./types";
import {
  Employee_DELETE_FAIL,
  Employee_DELETE_REQUEST,
  Employee_DELETE_SUCCESS,
  Employee_LIST_FAIL,
  Employee_LIST_REQUEST,
  Employee_LIST_SUCCESS,
  Employee_REGISTER_FAIL,
  Employee_REGISTER_REQUEST,
  Employee_REGISTER_SUCCESS,
  Employee_UPDATE_FAIL,
  Employee_UPDATE_REQUEST,
  Employee_UPDATE_SUCCESS,
} from "./employeeActionTypes";
// import Employees from "../../pages/Employees";

const initialState = {
  loading: false,
  employees: [],
  error: null,
};

export const employeeListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Employee_LIST_REQUEST:
      return { ...state, loading: true };

    case Employee_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload.employees,
      };
    case Employee_LIST_FAIL:
      return {
        ...state,
        loading: false,
        employees: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const employeeRegisterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Employee_REGISTER_REQUEST:
      return { ...state, loading: true };

    case Employee_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: [...state.employees, action.payload],
      };
    case Employee_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        employees: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const employeeUpdateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Employee_UPDATE_REQUEST:
      return { ...state, loading: true };

    case Employee_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        employee: action.payload.employee,
      };
    case Employee_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        employee: {},
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export const employeeDeleteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Employee_DELETE_REQUEST:
      return { ...state, loading: true };

    case Employee_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        employee: action.payload.employee,
      };
    case Employee_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        employees: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
