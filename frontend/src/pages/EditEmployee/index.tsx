import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import "./index.css";

import { employeeUpdateRequest } from "../../store/employee/employeeAction";
import { Spinner } from "../../components/common/spinner";

const options = [
  {
    label: "",
    value: "",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const EditEmployee = () => {
  const { _id } = useParams();
  const naviagte = useNavigate();

  const dispatch = useDispatch();

  const callback = (data: any) => {
    console.log("inside the add employee function");
  };

  useEffect(() => {}, []);

  let { employees, loading, error } = useSelector(
    (state: RootState) => state.EmployeeList
  );

  const mainData = employees.filter((emp: any) => emp._id == _id);

  const [employee, setEmployee] = useState({
    name: mainData[0].name,
    gender: mainData[0].gender,
    dob: mainData[0].dob,
    salary: mainData[0].salary,
  });

  const submitEditEmployee = (event: any) => {
    event.preventDefault();

    dispatch(
      employeeUpdateRequest({
        values: {
          name: employee.name,
          dob: employee.dob,
          gender: employee.gender,
          salary: employee.salary,
        },
        id: mainData[0]._id,
      })
    );
  };

  // read data from form
  const onChangeForm = (event: any) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2 className="table__title">Edit Employee</h2>
      {error && <p>Error Occured in the application</p>}

      {loading && <Spinner />}
      <form className="form" onSubmit={submitEditEmployee}>
        <section className="form__section">
          <label>Employee name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={onChangeForm}
          />
        </section>
        <section className="form__section">
          <label>Employee gender</label>
          <select
            name="Gender"
            id="gender"
            value={employee.gender}
            onChange={onChangeForm}
          >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </section>
        <section className="form__section">
          <label>Employee date of Birth</label>
          <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={onChangeForm}
          />
        </section>
        <section className="form__section">
          <label>Employee salary</label>
          <input
            type="number"
            name="price"
            min="0"
            value={employee.salary}
            onChange={onChangeForm}
          />
        </section>

        <div className="button__container">
          <button
            type="button"
            className="button button--cancel"
            onClick={() => naviagte("/")}
          >
            Cancel
          </button>
          <button className="button button--confirm">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
