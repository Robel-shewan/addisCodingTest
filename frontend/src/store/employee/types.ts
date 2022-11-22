import {
  Employee_LIST_REQUEST,
  Employee_LIST_SUCCESS,
  Employee_LIST_FAIL,
  Employee_REGISTER_SUCCESS,
  Employee_REGISTER_FAIL,
  Employee_UPDATE_SUCCESS,
  Employee_UPDATE_FAIL,
  Employee_DELETE_SUCCESS,
  Employee_DELETE_FAIL,
  Employee_REGISTER_REQUEST,
  Employee_UPDATE_REQUEST,
  Employee_DELETE_REQUEST,
} from "./employeeActionTypes";

export interface IEmployee {
  id: string;
  name: string;
  gender: string;
  dob: string;
  salary: number;
}

export interface EmployeeState {
  loading: false;
  employees: IEmployee;
  error: null;
}

export interface EmployeePayload {
  values: {
    name: string;
    gender: string;
    dob: string;
    salary: number;
  };
  id?: string;
  callback?: any;
}

export interface EmployeeDeletePayload {
  id: string;
}

export interface EmployeeRegisterSuccessPayload {
  employee: {};
}

export interface EmployeeRegisterFailurePayload {
  error: string;
}

export interface EmployeeListSuccessPayload {
  employees: string[];
}

export interface EmployeeListFailurePayload {
  error: string;
}

export interface EmployeeUpdateSuccessPayload {
  employee: {};
}

export interface EmployeeUpdateFailurePayload {
  error: string;
}

export interface EmployeeDeleteSuccessPayload {
  employee: {};
}
export interface EmployeeDeleteFailurePayload {
  error: string;
}

// Types

export interface EmployeeRegisterRequest {
  type: typeof Employee_REGISTER_REQUEST;
  payload: EmployeePayload;
}

export interface EmployeeListRequest {
  type: typeof Employee_LIST_REQUEST;
}
export interface EmployeeUpdateRequest {
  type: typeof Employee_UPDATE_REQUEST;
  payload: EmployeePayload;
}

export interface EmployeeDeleteRequest {
  type: typeof Employee_DELETE_REQUEST;
  payload: EmployeeDeletePayload;
}

export type EmployeeListSuccess = {
  type: typeof Employee_LIST_SUCCESS;
  payload: EmployeeListSuccessPayload;
};

export type EmployeeListFailure = {
  type: typeof Employee_LIST_FAIL;
  payload: EmployeeListFailurePayload;
};

export type EmployeeRegisterSuccess = {
  type: typeof Employee_REGISTER_SUCCESS;
  payload: EmployeeRegisterSuccessPayload;
};

export type EmployeeRegisterFailure = {
  type: typeof Employee_REGISTER_FAIL;
  payload: EmployeeRegisterFailurePayload;
};

export type EmployeeUpdateSuccess = {
  type: typeof Employee_UPDATE_SUCCESS;
  payload: EmployeeUpdateSuccessPayload;
};

export type EmployeeUpdateFailure = {
  type: typeof Employee_UPDATE_FAIL;
  payload: EmployeeUpdateFailurePayload;
};

export type EmployeeDeleteSuccess = {
  type: typeof Employee_DELETE_SUCCESS;
  payload: EmployeeDeleteSuccessPayload;
};

export type EmployeeDeleteFailure = {
  type: typeof Employee_DELETE_FAIL;
  payload: EmployeeDeleteFailurePayload;
};

export type EmployeeActions =
  | EmployeeRegisterRequest
  | EmployeeRegisterSuccess
  | EmployeeRegisterFailure
  | EmployeeListRequest
  | EmployeePayload
  | EmployeeListSuccess
  | EmployeeListFailure
  | EmployeeUpdateRequest
  | EmployeeUpdateSuccess
  | EmployeeUpdateFailure
  | EmployeeDeleteRequest
  | EmployeeDeleteSuccess
  | EmployeeDeleteFailure;
