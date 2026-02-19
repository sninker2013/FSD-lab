import type { Department, Employee } from "../main/main";
import { departmentData } from "../main/main";

export function getEmployeesByDepartment(department: string): Department {
    const foundDepartment = departmentData.find(d => d.name === department);

    if(!foundDepartment) {
        throw new Error(`Failed to fetch department with name: ${department}`)
    }

    return foundDepartment;
}

export function createEmployee(firstName: string, lastName: string): Employee {
    const newEmployee = {firstName, lastName}

    return newEmployee;
}