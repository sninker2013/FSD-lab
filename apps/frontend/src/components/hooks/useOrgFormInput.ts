import { Role } from "../apis/orgData";
import * as OrganizationService from "../services/organizationService";
import { useState } from "react";

function UseOrgFormInput({
    roles,
    updateRoles
}: {
    roles: Role[],
    updateRoles: React.Dispatch<React.SetStateAction<Role[]>>
}) {
    const [firstName, updateFirstName] = useState<string>("")
    const [lastName, updateLastName] = useState<string>("")
    const [title, updateTitle] = useState<string>("")
    const [errors, updateErrors] = useState<string[]>([])

    async function tryForm (): Promise<{role?: Role, errors: string[]}> {
        const { isValid, errors } = await OrganizationService.validateForm(firstName, title);
        let role
        if (isValid) {
            role = await OrganizationService.createRole(firstName, lastName, title);
            return { role, errors }
        } else {
            return { errors }
        }
    }

    const resetForm = () => {
        updateFirstName("");
        updateLastName("");
        updateTitle("");
        updateErrors([])
    }

    return {
        firstName,
        updateFirstName,
        lastName,
        updateLastName,
        title,
        updateTitle,
        roles,
        updateRoles,
        errors,
        updateErrors,
        tryForm,
        resetForm
    }
}

export default UseOrgFormInput;