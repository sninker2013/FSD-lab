import express, { Express } from "express";
import cors from "cors";
import corsOptions from "../config/cors";
import dotenv from "dotenv";

import employeeRoutes from "./api/v1/routes/employeeRoutes";
import departmentRoutes from "./api/v1/routes/departmentRoutes";

const app: Express = express();

dotenv.config();

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/v1", employeeRoutes);
app.use("/api/v1", departmentRoutes);

export default app;
