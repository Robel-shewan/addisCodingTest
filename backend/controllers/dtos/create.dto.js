import Joi from "joi";

function createEmployeeDto(employee) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    dob: Joi.date().required(),
    gender: Joi.string().required(),
    salary: Joi.number().required(),
  };

  return Joi.validate(employee, schema);
}

export { createEmployeeDto };
