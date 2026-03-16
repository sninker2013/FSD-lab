import { departmentData } from "../main/main";

export function validateForm(
    firstName: string,
    department: string
    ): {
        isValid: boolean;
        errors: string[];
    } {
        let isValid = true;
        const errors: string[] = [];

        if (firstName.length < 3) {
            errors.push("First name must be at least 3 characters")
            isValid = false
        }

        let departmentValidation: boolean = false;
        departmentData.forEach(d => {
            if (d.name === department) {
                departmentValidation = true
                return
            }
        })
        if (!departmentValidation) {
            errors.push("Please Select a Department")
            isValid = false
        }


    return {isValid, errors}
}