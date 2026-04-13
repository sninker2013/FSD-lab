import { Role } from "../apis/orgData";
import UseOrgFormInput from "../hooks/useOrgFormInput";

function Form({
    roles,
    updateRoles
}: {
    roles: Role[],
    updateRoles: React.Dispatch<React.SetStateAction<Role[]>>
}) {

    const { firstName, updateFirstName, 
            lastName, updateLastName, 
            title, updateTitle,
            errors, updateErrors,
            tryForm,
            resetForm
        } = UseOrgFormInput({roles, updateRoles});

        const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const { role, errors } = await tryForm();
        if (!role) {
            updateErrors(errors);
            return;
        }
        updateRoles(oldRoles => [...oldRoles, role]);

        resetForm();
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
            <label>Role: </label>
            <input
                value={title}
                onChange={(e) => updateTitle(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;