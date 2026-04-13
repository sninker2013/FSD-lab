import Form from "./organizationForm";
import type { Role } from "../apis/orgData";
import * as RoleService from "../services/organizationService";
import { useEffect, useState } from "react";

import "./organization.css"

export function Organization() {
    const rolesList: React.JSX.Element[] = [];
    const [roles, updateRoles] = useState<Role[]>([]);
    
        useEffect(() => {
            (async () => {
              const roleData = await RoleService.fetchRoles();
              updateRoles(roleData);
            })();
          }, []);


    roles.forEach(role => {
        rolesList.push(<RolesList
            role={role}
            />
        )
    })

    return (
        <>
            {rolesList}
            <Form 
              roles={roles}
              updateRoles={updateRoles}
      />
        </>
    )
}

function RolesList({role}: {role: Role}) {
    return (
        <li>
            <p>{role.employee.firstName} {role.employee.lastName}</p>
            <p>{role.title}</p>
        </li>
    )
}
