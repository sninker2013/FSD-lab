interface Department {
	name: string;
  	employees: Employee[];
}

interface Employee {
	firstName: string;
  	lastName?: string;
}

 // Used AI to generate this array to remove tedium
const departments: Department[] = [
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

if(typeof window !== "undefined") {
	generateEmployees(departments);
}

function generateEmployees(departments: Department[]) {
  for(let i = 0; i < departments.length; i++) {
    const departmentsSection = document.getElementById("departments");
    if (!departmentsSection){
      return
    }
    const department = departments[i];
    if (!department) {
      return;
    }
    let departmentName = document.createElement("h2");
    departmentName.textContent = department.name
    let departmentEmployees = department.employees;

    const departmentSection = document.createElement("section")
    departmentSection.id = `${departmentName}`

    departmentSection.appendChild(departmentName);

    for(let i = 0; i < departmentEmployees.length; i++) {
      const employeeNode = document.createElement("p");
      employeeNode.textContent = `${departmentEmployees[i].firstName} ${departmentEmployees[i].lastName}`;
      departmentSection.appendChild(employeeNode);
    }

	}
}