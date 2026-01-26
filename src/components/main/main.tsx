import "./main.css"

export interface Department {
	name: string;
  	employees: Employee[];
}

export interface Employee {
	firstName: string;
  	lastName?: string;
}

export let departmentData: Department[] = [
  {
    name: "Administration",
    employees: [
      { firstName: "Zoë", lastName: "Robins" },
      { firstName: "Madeleine", lastName: "Madden" },
    ],
  },
  {
    name: "Audit",
    employees: [
      { firstName: "Josha", lastName: "Sadowski" },
      { firstName: "Kate", lastName: "Fleetwood" },
    ],
  },
  {
    name: "Banking Operations",
    employees: [
      { firstName: "Priyanka", lastName: "Bose" },
      { firstName: "Hammed", lastName: "Animashaun" },
      { firstName: "Álvaro", lastName: "Morte" },
      { firstName: "Taylor", lastName: "Napier" },
      { firstName: "Alan", lastName: "Simmonds" },
    ],
  },
  {
    name: "Communications",
    employees: [
      { firstName: "Gil", lastName: "Cardinal" },
      { firstName: "Richard", lastName: "J. Lewis" },
    ],
  },
  {
    name: "Corporate Services",
    employees: [
      { firstName: "Randy", lastName: "Bradshaw" },
      { firstName: "Tracey", lastName: "Cook" },
      { firstName: "Lubomir", lastName: "Mykytiuk" },
    ],
  },
  {
    name: "Facilities",
    employees: [
      { firstName: "Dakota", lastName: "House" },
      { firstName: "Lori", lastName: "Lea Okemah" },
      { firstName: "Renae", lastName: "Morrisseau" },
      { firstName: "Rick", lastName: "Belcourt" },
    ],
  },
  {
    name: "Financial Services",
    employees: [
      { firstName: "Selina", lastName: "Hanusa" },
      { firstName: "Buffy", lastName: "Gaudry" },
      { firstName: "Shaneen", lastName: "Ann Fox" },
      { firstName: "Allan", lastName: "Little" },
      { firstName: "Danny", lastName: "Rabbit" },
    ],
  },
  {
    name: "Human Resources",
    employees: [
      { firstName: "Jesse", lastName: "Ed Azure" },
      { firstName: "Stacy", lastName: "Da Silva" },
      { firstName: "Vladimír", lastName: "Valenta" },
      { firstName: "Samone", lastName: "Sayeses-Whitney" },
      { firstName: "Paul", lastName: "Coeur" },
    ],
  },
  {
    name: "Information Technology",
    employees: [
      { firstName: "Graham", lastName: "Greene" },
    ],
  },
];


export function main({
    departments,
}:{
    departments: Department[],
}) {
    return (
        <>
            <main>
                <Employees departments={departments
                }/>
            </main>
        </>
    );
}

function Employees({departments}: {departments: Department[]}) {
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

export default main;