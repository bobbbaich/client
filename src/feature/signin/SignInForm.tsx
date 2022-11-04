import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import * as React from "react";
import {useFormik} from "formik";
import {signInValidationSchema} from "../../validation/signIn.validation";
import {Credentials} from "../../model/credentials";

export const initialCredentials: Credentials = {
    email: '',
    password: '',
    rememberMe: false,
};

export default function SignInForm() {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialCredentials,
        validationSchema: signInValidationSchema,
        onSubmit: (credentials: Credentials) => {
            console.log("credentials.email=" + credentials.email)
            console.log("credentials.password=" + credentials.password)
            console.log("credentials.rememberMe=" + credentials.rememberMe)
        },
    });

    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>

            <Box component="form"
                 noValidate
                 sx={{mt: 1}}
                 onSubmit={formik.handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    {...formik.getFieldProps('email')}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    {...formik.getFieldProps('password')}
                />
                <FormControlLabel
                    control={<Checkbox
                        color="primary"
                        {...formik.getFieldProps('rememberMe')}
                    />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}