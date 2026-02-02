import "./header.css"
import { Nav } from "./nav"

function Header() {
    return(
        <header>
            <div>
                <img src="https://itsm-ace.ca/images/logo.svg" alt="The Pixell River Logo"></img>
                <h1>Pixell River Employee Directory</h1>
            </div>
            <Nav />
        </header>
    )
}

export default Header;