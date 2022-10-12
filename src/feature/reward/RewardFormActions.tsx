import React from "react";
import {useAppDispatch} from "../../redux/common/hooks";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Reward} from "../../model/reward";
import {deleteReward, readAllRewards, toggleDrawer} from "../../redux/rewardSlice";

export interface RewardCardActionsProps {
    reward?: Reward,
}

export function RewardCardActions(props: RewardCardActionsProps) {
    const dispatch = useAppDispatch();

    const submitDelete = (uuid: string) => () => {
        dispatch(deleteReward(uuid))
            .then(() => {
                dispatch(toggleDrawer(false))
                dispatch(readAllRewards())
            })
            .catch((error) => {
                console.log("error " + JSON.stringify(error))
            })
    };

    return (
        <React.Fragment>
            {props.reward ?
                <Stack
                    sx={{pt: 4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button type="submit"
                            variant="contained"
                    >
                        Update
                    </Button>
                    <Button variant="outlined"
                            color="error"
                            onClick={submitDelete(props.reward.uuid)}
                    >
                        Delete
                    </Button>
                </Stack> :
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                >
                    Create
                </Button>
            }
        </React.Fragment>
    );
}
