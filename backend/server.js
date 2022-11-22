import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import "express-async-errors";
import connectDB from "./config/db.js";
import employeeRoute from "./routes/employeeRoutes.js";
import { error } from "./middleware/error.js";

dotenv.config();
const app = express();
connectDB();
const __dirname = path.resolve();
app.use(cors());

app.use(express.json());

app.use("/api/employees", employeeRoute);

app.use(error);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Listening the Express server at port ${port} `)
);
