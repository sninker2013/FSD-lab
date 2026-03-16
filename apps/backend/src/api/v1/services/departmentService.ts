import { Department } from "@shared/types/department";
import { departmentData } from "../data/departmentData";

export async function getAllDepartments(): Promise<Department[]> {
    const departments: Department[] = departmentData;
    return departments;
}