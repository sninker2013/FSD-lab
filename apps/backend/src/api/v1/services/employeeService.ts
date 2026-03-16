import { Employee } from "../../../../../../shared/types/employee";

export async function createEmployee(employeeData: {
    firstName: string,
    lastName?: string
}): Promise<Employee> {
    const newEmployee: Employee = employeeData;

    return newEmployee;
}