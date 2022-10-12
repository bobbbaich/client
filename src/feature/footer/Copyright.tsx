import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Reward Manager
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
