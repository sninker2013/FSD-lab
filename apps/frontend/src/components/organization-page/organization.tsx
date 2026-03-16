import type { Employee } from "../main/main";
import "./organization.css"

export interface Role {
  title: string;
  employee: Employee;
}

const roles: Role[] = [
  { title: "CEO / Chair of Board", employee: { firstName: "Jo-Anne", lastName: "Sinclair" } },
  { title: "COO / VP Operations", employee: { firstName: "Jackson", lastName: "Smith" } },
  { title: "CFO / VP Administration", employee: { firstName: "Susan", lastName: "Thomas" } },
  { title: "VP Client Services", employee: { firstName: "Richa", lastName: "Kaur" } },
  { title: "CIO", employee: { firstName: "Josee", lastName: "Benjamin" } },
  { title: "VP Sales & Marketing", employee: { firstName: "Vincent", lastName: "Grey" } },
  {
    title: "Director Financial and Audit Services",
    employee: { firstName: "Rupa", lastName: "Kharki" }
  },
  { title: "Director Human Resources", employee: { firstName: "Xun", lastName: "Kuang" } },
  {
    title: "Director Legal Services / General Counsel",
    employee: { firstName: "Stien", lastName: "Pedersen" }
  },
  { title: "Director Information Technology", employee: { firstName: "Sandra", lastName: "Bear" } },
  {
    title: "Director Information Security and CISSO",
    employee: { firstName: "Gus", lastName: "Blue" }
  },
  { title: "Director Accounting", employee: { firstName: "Sam", lastName: "Kong" } },
  { title: "Director Physical Security", employee: { firstName: "Valentine", lastName: "Smith" } },
  { title: "Director Facilities", employee: { firstName: "Mariya", lastName: "Kaperski" } },
  {
    title: "Manager, Business Continuity and Disaster Recovery",
    employee: { firstName: "Abd al-Hamid", lastName: "Alami" }
  },
  { title: "Manager, Internal Audit", employee: { firstName: "Victoria", lastName: "Gray" } },
  { title: "Chief Architect", employee: { firstName: "Cheryl", lastName: "Guru" } },
  { title: "Manager, Security Architecture", employee: { firstName: "Jean", lastName: "Ngoy" } },
  {
    title: "Solution Architect, Online Banking",
    employee: { firstName: "Kris", lastName: "Gold" }
  },
  { title: "Manager, Application Solutions", employee: { firstName: "Isaac", lastName: "Smith" } },
  {
    title: "Lead Developer, Online Banking",
    employee: { firstName: "Payton", lastName: "Frost" }
  },
  { title: "Manager, Operational Risk", employee: { firstName: "Samantha", lastName: "Nettle" } },
  { title: "Manager, Vendor Relations", employee: { firstName: "Yolanda", lastName: "Ferreira" } },
  { title: "Manager, Purchasing", employee: { firstName: "Samir", lastName: "Hassan" } },
  { title: "Manager, Communications", employee: { firstName: "Yuna", lastName: "Aikawa" } },
  {
    title: "Manager, Customer Experience and Community Engagement",
    employee: { firstName: "Jonathan", lastName: "Carberry" }
  },
  { title: "Manager of Sales", employee: { firstName: "Roland", lastName: "Wei" } },
  { title: "Manager, Marketing", employee: { firstName: "Pran", lastName: "Singh" } }
];

export function Organization() {
    const rolesList: React.JSX.Element[] = [];

    roles.forEach(role => {
        rolesList.push(<RolesList
            role={role}
            />
        )
    })

    return (
        <>
            {rolesList}
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
