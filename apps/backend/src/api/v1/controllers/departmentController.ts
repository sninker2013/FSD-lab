import { Request, Response, NextFunction } from "express";
import { Department } from "@shared/types/department";
import * as departmentService from "../services/departmentService";
import { successResponse } from "../models/responseModel";

export const getAllDepartments = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const departments: Department[] = await departmentService.getAllDepartments();
        res.status(200).json(successResponse(departments, "Departments fetched successfully"));
    } catch (error) {
        next(error);
    }
}