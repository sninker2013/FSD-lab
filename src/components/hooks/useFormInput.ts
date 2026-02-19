import { useState } from "react";
import type { Department } from "../main/main";
import * as employeeService from "../services/employeeService"

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

    function tryForm (): {isValid: boolean, errors: string[]} {
        const validation = employeeService.validateForm(firstName, department)

        return validation;
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