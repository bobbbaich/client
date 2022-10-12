import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/common/hooks";
import {useFormik} from "formik";
import {rewardValidationSchema} from "../../model/rewardValidation";
import {createReward, readAllRewards, selectReward, toggleDrawer, updateReward} from "../../redux/rewardSlice";
import {CreateReward, Reward} from "../../model/reward";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {CardGiftcard} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {RewardCardActions} from "./RewardFormActions";

export const initialReward: CreateReward = {
    name: ''
};

export function RewardForm() {
    const dispatch = useAppDispatch();

    const reward = useAppSelector(selectReward);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: (reward ? reward : initialReward),
        validationSchema: rewardValidationSchema,
        onSubmit: (submittedReward) => {
            let promise;
            if (reward) {
                promise = dispatch(updateReward(submittedReward as Reward));
            } else {
                promise = dispatch(createReward(submittedReward as CreateReward));
            }
            promise.unwrap()
                .then(() => {
                    dispatch(toggleDrawer(false))
                    dispatch(readAllRewards())
                })
                .catch((error) => {
                    // handle error here
                })
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <CardGiftcard/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create reward
                </Typography>
                <Box component="form"
                     noValidate
                     sx={{mt: 3}}
                     onSubmit={formik.handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                    <TextField
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoComplete="name"
                        {...formik.getFieldProps('name')}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <RewardCardActions reward={reward}/>
                </Box>
            </Box>
        </Container>
    );
}
