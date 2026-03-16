import { NavLink } from "react-router-dom"

export function Nav() {
    return (
        <nav>
            <NavLink to="/organization">
                Orginization
            </NavLink>
            <NavLink to="/employees">
                Employees
            </NavLink>
        </nav>
    )
}