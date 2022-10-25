import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <a className="navbar-brand" href="/">Active Directory Authentication</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            <br />
            <h1><center>Azure AD Project Task</center></h1>
            <br />
            <br />
            {props.children}
        </>
    );
};