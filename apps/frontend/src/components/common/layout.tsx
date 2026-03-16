import { Outlet } from "react-router-dom"
import Header from "./header-section/header"
import Footer from "./footer-section/footer"

export function Layout() {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer />
        </>
    )
}