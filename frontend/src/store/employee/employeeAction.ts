import {
  Employee_LIST_REQUEST,
  Employee_LIST_SUCCESS,
  Employee_LIST_FAIL,
  Employee_DELETE_REQUEST,
  Employee_DELETE_SUCCESS,
  Employee_DELETE_FAIL,
  Employee_REGISTER_REQUEST,
  Employee_UPDATE_SUCCESS,
  Employee_REGISTER_SUCCESS,
  Employee_REGISTER_FAIL,
  Employee_UPDATE_REQUEST,
  Employee_UPDATE_FAIL,
} from "./employeeActionTypes";

import {
  EmployeePayload,
  EmployeeListRequest,
  EmployeeListSuccess,
  EmployeeListSuccessPayload,
  EmployeeListFailure,
  EmployeeListFailurePayload,
  EmployeeDeleteRequest,
  EmployeeDeleteSuccess,
  EmployeeDeleteSuccessPayload,
  EmployeeDeleteFailure,
  EmployeeDeleteFailurePayload,
  EmployeeDeletePayload,
  EmployeeRegisterRequest,
  EmployeeUpdateSuccessPayload,
  EmployeeUpdateSuccess,
  EmployeeRegisterSuccessPayload,
  EmployeeRegisterSuccess,
  EmployeeRegisterFailurePayload,
  EmployeeRegisterFailure,
  EmployeeUpdateFailure,
  EmployeeUpdateRequest,
  EmployeeUpdateFailurePayload,
} from "./types";

export const employeeListRequest = (): EmployeeListRequest => ({
  type: Employee_LIST_REQUEST,
});

export const employeeListSuccess = (
  payload: EmployeeListSuccessPayload
): EmployeeListSuccess => ({
  type: Employee_LIST_SUCCESS,
  payload,
});

export const employeeListFailure = (
  payload: EmployeeListFailurePayload
): EmployeeListFailure => ({
  type: Employee_LIST_FAIL,
  payload,
});

export const employeeDeleteRequest = (
  payload: EmployeeDeletePayload
): EmployeeDeleteRequest => ({
  type: Employee_DELETE_REQUEST,
  payload,
});

export const employeeDeleteSuccess = (
  payload: EmployeeDeleteSuccessPayload
): EmployeeDeleteSuccess => ({
  type: Employee_DELETE_SUCCESS,
  payload,
});

export const employeeDeleteFailure = (
  payload: EmployeeDeleteFailurePayload
): EmployeeDeleteFailure => ({
  type: Employee_DELETE_FAIL,
  payload,
});

export const employeeRegisterRequest = (
  payload: EmployeePayload
): EmployeeRegisterRequest => ({
  type: Employee_REGISTER_REQUEST,
  payload,
});

export const employeeRegisterSuccess = (
  payload: EmployeeRegisterSuccessPayload
): EmployeeRegisterSuccess => ({
  type: Employee_REGISTER_SUCCESS,
  payload,
});

export const employeeRegisterFailure = (
  payload: EmployeeRegisterFailurePayload
): EmployeeRegisterFailure => ({
  type: Employee_REGISTER_FAIL,
  payload,
});

export const employeeUpdateRequest = (
  payload: EmployeePayload
): EmployeeUpdateRequest => ({
  type: Employee_UPDATE_REQUEST,
  payload,
});

export const employeeUpdateSuccess = (
  payload: EmployeeUpdateSuccessPayload
): EmployeeUpdateSuccess => ({
  type: Employee_UPDATE_SUCCESS,
  payload,
});

export const employeeUpdateFailure = (
  payload: EmployeeUpdateFailurePayload
): EmployeeUpdateFailure => ({
  type: Employee_UPDATE_FAIL,
  payload,
});
