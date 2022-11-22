import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { employeeRegisterRequest } from "../../store/employee/employeeAction";
import { RootState } from "../../store/reducers";
import { Spinner } from "../../components/common/spinner";

const NewEmployee = () => {
  // const [name, setName] = useState("");
  // const [dob, setDob] = useState("");
  // const [gender, setGender] = useState("");
  // const [salary, setSalary] = useState(0);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    dob: Yup.string().required().label("Date of Birth"),
    gender: Yup.string().required().label("Gender"),
    salary: Yup.number().required().label("Salary"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { employees, loading, error } = useSelector(
    (state: RootState) => state.EmployeeRegister
  );

  const callback = (data: any) => {
    console.log("inside the add employee function");
  };

  console.log("error", error);

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
  // };
  return (
    <div>
      <h2 className="table__title">New product</h2>
      {error && <p>Error Occured in the application</p>}

      {loading && <Spinner />}

      <Formik
        initialValues={{
          name: "",
          gender: "",
          dob: "",
          salary: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(
            employeeRegisterRequest({
              values: {
                name: values.name,
                dob: values.dob,
                gender: values.gender,
                salary: values.salary,
              },
              callback,
            })
          );

          values.name = "";
          values.dob = "";
          values.gender = "";
          values.salary = 0;
          console.log(values.name, values.gender, values.salary);
        }}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          isValid,
        }): any => (
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <section className="form__section">
              <label>Employee name</label>
              <input
                type="text"
                placeholder="Employee name"
                name="name"
                value={values.name}
                onChange={handleChange("name")}
                // onChangeText={handleChange("name")}
                // value={name}
                // onChange={(event) => setName(event.target.value)}
              />
              {errors.name && touched.name ? (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 10,
                    fontSize: 12,
                    margin: 5,
                  }}
                >
                  {errors.name}
                </div>
              ) : null}
            </section>

            <section className="form__section">
              <label>gender</label>
              <select
                name="Gender"
                id="gender"
                value={values.gender}
                onChange={handleChange("gender")}
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>

              {/* <input
                type="text"
                placeholder="employee Gender"
                name="name"
                // value={gender}
                // onChange={(event) => setGender(event.target.value)}
                value={values.gender}
                onChange={handleChange("gender")}
              /> */}
              {errors.gender && touched.gender ? (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 10,
                    fontSize: 12,
                    margin: 5,
                  }}
                >
                  {errors.gender}
                </div>
              ) : null}
            </section>
            <section className="form__section">
              <label>dob</label>
              <input
                type="date"
                placeholder="Employee Birth"
                name="dob"
                // value={dob}
                // onChange={(event) => setDob(event.target.value)}
                value={values.dob}
                onChange={handleChange("dob")}
              />
              {errors.dob && touched.dob ? (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 10,
                    fontSize: 12,
                    margin: 5,
                  }}
                >
                  {errors.dob}
                </div>
              ) : null}
            </section>
            <section className="form__section">
              <label>Product Salary</label>
              <input
                type="number"
                name="salary"
                // value={salary}
                // onChange={(event) => setSalary(Number(event.target.value))}
                value={values.salary}
                onChange={handleChange("salary")}
              />
              {errors.salary && touched.salary ? (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 10,
                    fontSize: 12,
                    margin: 5,
                  }}
                >
                  {errors.salary}
                </div>
              ) : null}
            </section>
            <div className="button__container">
              <button
                type="button"
                className="button button--cancel"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button className="button button--confirm" disabled={!isValid}>
                Confirm
              </button>
            </div>
            {/* {alert ? <p className="alert-message">{alert.msg}</p> : null} */}
          </form>
        )}
      </Formik>

      {/* {loading ? <p>Loading...</p> : null}
      {error ? <p>Ups! An error ocurred.</p> : null} */}
    </div>
  );
};

export default NewEmployee;
