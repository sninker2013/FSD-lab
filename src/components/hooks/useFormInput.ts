import { useState } from "react";
import type { Department, Employee } from "../main/main";
import * as employeeService from "../services/employeeService"
import * as employeeRepo from "../apis/employeeRepo"

export function useFormInput({
    departments,
    updateDepartments
}: {
    departments: Department[],
    updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>
}) {
    const [firstName, updateFirstName] = useState<string>("")
    const [lastName, updateLastName] = useState<string>("")
    const [department, updateDepartment] = useState<string>("")
    const [errors, updateErrors] = useState<String[]>([])

    function tryForm (): {employee?: Employee, errors: string[]} {
        const { isValid, errors} = employeeService.validateForm(firstName, department)
        let employee
        if (isValid) {
            employee = employeeRepo.createEmployee(firstName, lastName)
            return {employee, errors}
        } else {
            return {errors}
        }
        
    }

    const resetForm = () => {
        updateFirstName("");
        updateLastName("");
        updateDepartment("");
        updateErrors([])
    }

    return {
        firstName,
        updateFirstName,
        lastName,
        updateLastName,
        department,
        updateDepartment,
        departments,
        updateDepartments,
        errors,
        updateErrors,
        tryForm,
        resetForm
    }
}