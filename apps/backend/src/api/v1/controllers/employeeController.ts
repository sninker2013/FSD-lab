import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";
import { successResponse } from "../models/responseModel";

export const createEmployee = async(
    req: Request,
    res: Response,
    next: NextFunction): Promise<void> => {
        try {
            const newEmployee = await employeeService.createEmployee(req.body);
            res.status(201)
                .json(successResponse(newEmployee, "Employee created successfully"));
        } catch (error) {
            next(error);
        }
    };
