import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeListRequest } from "../../store/employee/employeeAction";
import { RootState } from "../../store/reducers";
import { Spinner } from "../../components/common/spinner";
import Employee from "../Employee";
import Pagination from "../../components/pagination/pagination";

import "./index.css";

export interface EmployeeProps {
  data: {
    _id: string;
    name: string;
    dob: string;
    gender: string;
    salary: number;
  };
  onDeleteHandler: (data: any) => void;
}

const Employees = () => {
  let PageSize = 6;
  let [employeeData, setEmployeeData] = useState([]);
  const dispatch = useDispatch();
  let { employees, loading, error } = useSelector(
    (state: RootState) => state.EmployeeList
  );
  const deleteHandler = (data: any) => {
    const newEmployees = employees.filter((emp: any) => emp.id != data._id);
    setEmployeeData(newEmployees);
  };

  useEffect(() => {
    dispatch(employeeListRequest());
  }, [dispatch, employeeData]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return employees.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  console.log(currentTableData);

  return (
    <div>
      <h2 className="table__title">Employee</h2>
      {error ? <p>An error ocurred</p> : null}
      {loading ? (
        <p>
          <Spinner />
        </p>
      ) : error ? (
        <p>This is the error page </p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th id="table__title-price">gender</th>
                <th id="table__title-price">Data of Birth</th>
                <th id="table__title-price">Salary</th>

                <th id="table__title-action">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.length === 0
                ? "No Employees yet."
                : currentTableData.map((employee: any) => (
                    <Employee
                      key={employee._id}
                      data={employee}
                      onDeleteHandler={deleteHandler}
                    />
                  ))}
            </tbody>
          </table>

          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={employees.length}
            pageSize={PageSize}
            onPageChange={(page: any) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default Employees;
