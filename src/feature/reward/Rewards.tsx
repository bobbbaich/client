import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React from "react";
import {RewardCards} from "./RewardCards";
import {RewardSideMenu} from "./RewardSideMenu";
import {useAppDispatch} from "../../redux/common/hooks";
import {toggleSideMenu} from "../../redux/rewardSlice";

export default function Rewards() {
    const dispatch = useAppDispatch();

    return (
        <main>
            <Box
                sx={{bgcolor: 'background.paper', pt: 8, pb: 6,}}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Rewards layout
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don&apos;t simply skip over it entirely.
                    </Typography>
                    <Stack
                        sx={{pt: 4}}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained" onClick={() => {
                            dispatch(toggleSideMenu(true))
                        }}>
                            Create reward
                        </Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack>
                </Container>
            </Box>
            <Container sx={{py: 8}} maxWidth="md">
                <RewardCards/>
                <RewardSideMenu/>
            </Container>
        </main>
    );
}