import * as RoleRepo from "../apis/organizationRepo";
import { Role } from "../apis/orgData";

export async function fetchRoles(): Promise<Role[]> {
    const roles = await RoleRepo.fetchRoles();
    return roles;
}

export async function validateForm(firstName: string, title: string): Promise<
{isValid: boolean, errors: string[]}> {
    const errors: string[] = [];
    if (firstName.length <= 2) {
        errors.push("First name must be three characters or longer");
    }

    const roles = await RoleRepo.fetchRoles();
    const normalized = title.trim().toLowerCase();
    const alreadyExists = roles.some(r => r.title.trim().toLowerCase() === normalized);

    if (alreadyExists) {
        errors.push("That title already exists");
    }

    return { isValid: errors.length === 0, errors };
}

export async function createRole(
    firstName: string, 
    lastName: string, 
    title: string): Promise<Role> {
        const role = await RoleRepo.createRole(firstName, lastName, title);
        return role;
    }