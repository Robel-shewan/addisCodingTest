import Joi from "joi";

function updateEmployeeDto(employee) {
  const schema = {
    name: Joi.string().min(2).max(50),
    dob: Joi.date(),
    gender: Joi.string(),
    salary: Joi.number(),
  };

  return Joi.validate(employee, schema);
}

export { updateEmployeeDto };
