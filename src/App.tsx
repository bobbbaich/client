import React from 'react';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Header} from "./feature/header/Header";
import {Footer} from "./feature/footer/Footer";
import Rewards from "./feature/reward/Rewards";

const theme = createTheme();

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>

                <Rewards/>

                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;
