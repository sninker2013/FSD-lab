import "./main.css"
import { Department } from "@shared/types/department";
import { Employee } from "@shared/types/employee";

export function Employees({departments}: {departments: Department[]}) {
    const departmentsList: React.JSX.Element[] = [];


    departments.forEach((department) => {
        departmentsList.push(<DepartmentList
            department={department}
            />
        )
    })
    return (
        <section id="departments">
            {departmentsList}
        </section>
    )
}

function DepartmentList({department}: {department: Department}) {
    const employeesList: React.JSX.Element[] = [];
    department.employees.forEach(employee => {
        employeesList.push(<EmployeeList
            employee={employee}
            />
        )
    })

    return (
        <section>
            <h2>
                {department.name}
            </h2>
            {employeesList}
        </section>
    )
}

function EmployeeList({employee}: {employee: Employee}) {
    const employeeName = `${employee.firstName} ${employee.lastName}` 
    return (
        <li>
            {employeeName}
        </li>
    )
}