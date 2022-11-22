import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { employeeDeleteRequest } from "../../store/employee/employeeAction";
import { RootState } from "../../store/reducers";
import { EmployeeProps } from "../Employees";
// import { EmployeeProps } from "../Employees";
import "./index.css";

const Employee: React.FC<EmployeeProps> = ({ data, onDeleteHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, dob, gender, salary, _id } = data;

  let { employees, loading, error } = useSelector(
    (state: RootState) => state.EmployeeList
  );

  const confirmDeleteProduct = (id: string) => {
    const newemployee = employees.filter((emp: any) => emp._id != id);

    Swal.fire({
      title: "Are you sure you want to delete the Employee?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#62a086",
      cancelButtonColor: "#f66b61",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      onDeleteHandler(data);
      result.value && dispatch(employeeDeleteRequest({ id }));
    });
  };

  const redirectionEdition = (data: {}) => {
    navigate(`employee/edit/${_id}`);
  };
  return (
    <tr>
      <td>{data.name}</td>
      <td className="prices">{data.gender} </td>
      <td className="prices">{data.dob} </td>
      <td className="prices">{data.salary} $</td>
      <td className="button-container">
        <button
          className="button button--edit"
          type="button"
          onClick={() => redirectionEdition(data)}
        >
          Edit
        </button>
        <button
          className="button button--delete"
          type="button"
          onClick={() => confirmDeleteProduct(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
