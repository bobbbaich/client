import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import React from "react";
import Copyright from "./Copyright";

export function Footer() {
    return (
        <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose and meaning!
            </Typography>
            <Copyright/>
        </Box>
    );
}