import { Request, Response, NextFunction } from "express";
import { Department } from "@shared/types/department";
import * as departmentService from "../services/departmentService";

export const getAllDepartments = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const departments: Department[] = await departmentService.getAllDepartments();
        const pageCount = Math.ceil(departments.length / 10);
        let page = parseInt((_req.query.page as string) || '1');
        if (!page) { page = 1;}
        if (page > pageCount) {
            page = pageCount
        }
        res.status(200).json({
    "page": page,
    "pageCount": pageCount,
    "departments": departments.slice(page * 10 - 10, page * 10)
  });
    } catch (error) {
        next(error);
    }
}