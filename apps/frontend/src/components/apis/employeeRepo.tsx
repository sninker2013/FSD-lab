import type { Department } from "@shared/types/department";
import type { Employee } from "@shared/types/employee";
import { getAllDepartments } from "./departmentRepo";

export async function getEmployeesByDepartment(department: string): Promise<Department> {
    const departmentData = await getAllDepartments();
    const foundDepartment = departmentData.find(d => d.name === department);

    if(!foundDepartment) {
        throw new Error(`Failed to fetch department with name: ${department}`)
    }

    return foundDepartment;
}

export async function createEmployee(
    firstName: string,
    lastName: string
): Promise<Employee> {
    const BASE_URL = "http://localhost:3000/api/v1";
    const TERM_ENDPOINT = "/employees";

    const res = await fetch(`${BASE_URL}${TERM_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName }),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => null);
        const message = body?.message ?? `Request failed with status ${res.status}`;
        throw new Error(message);
    }

    const payload = await res.json();
    return payload.data as Employee;
}