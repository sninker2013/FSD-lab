import { type FormEvent, useRef, useState } from "react";
import type { Department, Employee } from "../main/main";

function Form({
    departments,
    updateDepartments,
}:{
    departments: Department[],
    updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>
}) {
    let firstNameRef = useRef<HTMLInputElement>(null);
    let lastNameRef = useRef<HTMLInputElement>(null);
    let departmentRef = useRef<HTMLSelectElement>(null);
    const [error, setError] = useState<string>("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const firstName = firstNameRef.current?.value || "";
        const lastName = lastNameRef.current?.value || "";
        const department = departmentRef.current?.value || "";

        if (firstName.length < 3) {
            setError("First name must be at least 3 characters long");
            return;
        }
        setError("");

        let newEmployee:Employee = {firstName, lastName}
        updateDepartments(oldDepartmentState => {
            return oldDepartmentState.map(d => {
                if(d.name === department) {
                    return {
                        ...d, employees: [...d.employees, newEmployee]
                    }
                } else {
                    return d;
                }
            })
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{error}</p>
            <label>First Name: </label>
            <input
                ref={firstNameRef}
                required
            />
            <label>Last Name:</label>
            <input
                ref={lastNameRef}
            />
            <label>Department:</label>
            <select ref={departmentRef} name="department">
                <option value="Administration">Administration</option>
                <option value="Audit">Audit</option>
                <option value="Banking Operations">Banking Operations</option>
                <option value="Communications">Communications</option>
                <option value="Corporate Services">Corporate Services</option>
                <option value="Facilities">Facilities</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Information Technology">Information Technology</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;


