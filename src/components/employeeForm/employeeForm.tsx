import type { Department } from "../main/main";
import { useFormInput } from "../hooks/useFormInput";

function Form({
    departments,
    updateDepartments
}: {
    departments: Department[],
    updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>
}) {

    const { firstName, updateFirstName, 
        lastName, updateLastName, 
        department, updateDepartment,
        errors, updateErrors,
        tryForm,
        resetForm
    } = useFormInput({departments, updateDepartments});

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const { employee, errors } = tryForm();
        if (employee == undefined) {
            updateErrors(errors);
            return;
        } else {
            updateDepartments(oldDepartmentState => {
                return oldDepartmentState.map(d => {
                    if(d.name === department) {
                        return {
                            ...d, employees: [...d.employees, employee]
                        }
                    } else {
                        return d;
                    }
                })
            });
            resetForm();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul className="errors">
                {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
            <label>First Name: </label>
            <input
                value={firstName}
                onChange={(e) => updateFirstName(e.target.value)}
            />
            <label>Last Name:</label>
            <input
                value={lastName}
                onChange={(e) => updateLastName(e.target.value)}
            />
            <label>Department:</label>
            <select value={department} onChange={(e) => updateDepartment(e.target.value)} name="department">
                <option value="">Select a Department</option>
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


