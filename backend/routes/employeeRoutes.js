import express from "express";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.route("/").get(getEmployees).post(addEmployee);
router.route("/:id").put(updateEmployee).delete(deleteEmployee);

export default router;
