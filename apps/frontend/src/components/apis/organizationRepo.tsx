import { Role } from "./orgData";
import { roleData } from "./orgData";

export function fetchRoles(): Role[] {
    return [...roleData];
}

export function createRole(
    firstName: string, 
    lastName: string,
    title: string): Role {
        const newRole: Role = {
            employee: {
                firstName,
                lastName
            },
            title
        }
        roleData.push(newRole);
        return newRole;
}