import React from 'react';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Header} from "./component/header/Header";
import {Footer} from "./component/footer/Footer";
import {Outlet} from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';
import withAuth from "./component/auth/WithAuth";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <CssBaseline/>
                <Header/>
                <div>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default withAuth(App);
