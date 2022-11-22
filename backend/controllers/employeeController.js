import mongoose from "mongoose";

import Employee from "../models/Employee.js";
import { createEmployeeDto } from "./dtos/create.dto.js";
import { updateEmployeeDto } from "./dtos/update.dto.js";

const getEmployees = async (req, res, next) => {
  const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
  const pagination = req.body.pagination ? parseInt(req.body.pagination) : 6;

  const employees = await Employee.find({});
  // .sort({ id: 1 })
  // .skip((pageNumber - 1) * pagination)
  // .limit(pagination);
  res.status(200).json(employees);
};

const addEmployee = async (req, res, next) => {
  const { error } = createEmployeeDto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, dob, gender, salary } = req.body;

  const employee = await Employee.create({
    name,
    dob,
    gender,
    salary,
  });

  res
    .status(200)
    .json({ data: employee, message: "The user SuccessFully Created !!!" });
};

const updateEmployee = async (req, res, next) => {
  const id = req.params.id;
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid)
    return res.status(400).json({ message: "The invalid object Id  !!!" });

  const { error } = updateEmployeeDto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let employee = await Employee.findById(id);

  if (!employee)
    return res
      .status(404)
      .json({ message: "The Employee with this Id is not Found !!!" });

  const { name, dob, gender, salary } = req.body;

  employee.name = name || employee.name;
  employee.dob = dob || employee.dob;
  employee.gender = gender || employee.gender;
  employee.salary = salary || employee.salary;

  employee = await employee.save();

  return res.status(200).json({ data: employee });
};

const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid)
    return res.status(400).json({ message: "The invalid object Id  !!!" });
  const employee = await Employee.findById(id);

  if (!employee)
    return res.status(404).json({ message: "The Employee is not Found  !!!" });

  const result = await employee.remove();

  res.status(200).json({
    data: result,
    message: "SuccessFully Deleted the Employee Information !!",
  });
};

export { getEmployees, addEmployee, updateEmployee, deleteEmployee };
