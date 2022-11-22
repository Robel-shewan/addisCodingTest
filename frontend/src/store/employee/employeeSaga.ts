import {
  Employee_DELETE_REQUEST,
  Employee_LIST_REQUEST,
  Employee_REGISTER_REQUEST,
  Employee_UPDATE_REQUEST,
} from "./employeeActionTypes";
import Swal from "sweetalert2";

import axios from "axios";

import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  employeeDeleteFailure,
  employeeDeleteRequest,
  employeeDeleteSuccess,
  employeeListFailure,
  employeeListRequest,
  employeeListSuccess,
  employeeRegisterFailure,
  employeeRegisterSuccess,
} from "./employeeAction";

import { IEmployee } from "./types";

const uri = "http://localhost:5000/api/employees/";

const employeeList = async () => {
  const response = await axios.get<IEmployee[]>(uri);

  return response;
};

const employeeDelete = async (payload: { id: string }) => {
  const { id } = payload;

  const response = await axios.delete(uri + id);
  return response;
};

const employeeRegister = async (payload: {
  name: string;
  dob: string;
  salary: number;
  gender: string;
}) => {
  const response = await axios.post(
    uri,
    { ...payload },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return response;
};

const employeeUpdate = async (payload: {
  name: string;
  dob: string;
  gender: string;
  salary: number;
  id: string;
}) => {
  const employee = {
    name: payload.name,
    dob: payload.dob,
    gender: payload.gender,
    salary: payload.salary,
  };
  const response = await axios.put(
    uri+payload.id
    { ...employee },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return response;
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* employeeRegisterSaga(action: any) {
  const { name, dob, gender, salary } = action.payload.values;
  try {
    const response: ResponseGenerator = yield call(employeeRegister, {
      name,
      dob,
      gender,
      salary,
    });

    console.log(response.data);

    yield put(employeeRegisterSuccess({ employee: response.data }));

    Swal.fire({
      title: "Added!",
      text: "The Employee has been SuccessFully Added !!.",
      icon: "success",
      confirmButtonColor: "#62a086",
    });

    // action.payload.callback(response.data);
  } catch (err: any) {
    yield put(employeeRegisterFailure({ error: err.message }));
  }
}

function* employeeListSaga(action: any) {
  try {
    const response: ResponseGenerator = yield call(employeeList);

    console.log(response.data);

    yield put(employeeListSuccess({ employees: response.data }));

    // action.payload.callback(response.data);
  } catch (err: any) {
    yield put(employeeListFailure({ error: err.message }));
  }
}

function* employeeUpdateSaga(action: any) {
  const { name, dob, gender, salary } = action.payload.values;
  const { id } = action.payload;
  try {
    const response: ResponseGenerator = yield call(employeeUpdate, {
      name,
      dob,
      gender,
      salary,
      id,
    });

    console.log(response.data);

    yield put(employeeRegisterSuccess({ employee: response.data }));

    Swal.fire({
      title: "Updated!",
      text: "The Employee has been Updated.",
      icon: "success",
      confirmButtonColor: "#62a086",
    });

    // action.payload.callback(response.data);
  } catch (err: any) {
    yield put(employeeRegisterFailure({ error: err.message }));
  }
}

function* employeeDeleteSaga(action: any) {
  try {
    //   const id = action.payload;
    // console.log(id);
    const response: ResponseGenerator = yield call(employeeDelete, {
      id: action.payload.id,
    });
    console.log(response.data);

    yield put(employeeDeleteSuccess({ employee: response.data }));

    Swal.fire({
      title: "Deleted!",
      text: "The Employee has been Deleted.",
      icon: "success",
      confirmButtonColor: "#62a086",
    });
  } catch (err: any) {
    yield put(employeeDeleteFailure({ error: err.message }));
  }
}

function* EmployeeSaga() {
  yield all([
    takeEvery(Employee_LIST_REQUEST, employeeListSaga),
    takeEvery(Employee_DELETE_REQUEST, employeeDeleteSaga),
    takeEvery(Employee_REGISTER_REQUEST, employeeRegisterSaga),
    takeEvery(Employee_UPDATE_REQUEST, employeeUpdateSaga),
  ]);
}

export default EmployeeSaga;
