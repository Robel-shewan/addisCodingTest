import { combineReducers } from "redux";
import {
  employeeDeleteReducer,
  employeeListReducer,
  employeeRegisterReducer,
  employeeUpdateReducer,
} from "./employee/employeeReducer";

const rootReducer = combineReducers({
  EmployeeList: employeeListReducer,
  EmployeeDelete: employeeDeleteReducer,
  EmployeeRegister: employeeRegisterReducer,
  EmployeeUpdate: employeeUpdateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
