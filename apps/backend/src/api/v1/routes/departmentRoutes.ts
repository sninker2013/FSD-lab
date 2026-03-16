import express, {Router} from "express";
import * as departmentController from "../controllers/departmentController";

const router: Router = express.Router();

router.get("/departments", departmentController.getAllDepartments);

export default router;