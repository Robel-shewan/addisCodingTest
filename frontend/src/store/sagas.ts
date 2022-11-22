import { all, fork } from "redux-saga/effects";
import employeeSaga from "./employee/employeeSaga";

export function* rootSaga() {
  yield all([employeeSaga()]);
}
