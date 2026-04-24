import { Outlet } from "react-router-dom"
import Header from "./header-section/header"
import Footer from "./footer-section/footer"

import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'


export function Layout() {
    return (
        <>
            <Header/>
            <Show when="signed-out">
                <SignInButton />
                <SignUpButton />
            </Show>
            <Show when="signed-in">
                <UserButton />
            </Show>
            <Outlet />
            <Footer />
        </>
    )
}