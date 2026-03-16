import type { Department } from "@shared/types/department";

type DepartmentsResponseJSON = {message: string, data: Department[]}
const BASE_URL = "http://localhost:3000/api/v1";
const TERM_ENDPOINT = "/departments";
export async function getAllDepartments(): Promise<Department[]> {
    const response: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}`,
    );

    if(!response.ok) {
        throw new Error(`Failed to fetch departments: ${response.statusText}`);
    }

    const json: DepartmentsResponseJSON = await response.json();
    return json.data;
}