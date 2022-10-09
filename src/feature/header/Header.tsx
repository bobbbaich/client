import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import React from "react";

export function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{mr: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Reward Client App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}