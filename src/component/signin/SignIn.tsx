import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Copyright from "../footer/Copyright";
import SignInForm from "./SignInForm";

export default function SignIn() {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <SignInForm/>
            <Copyright/>
        </Container>
    );
}