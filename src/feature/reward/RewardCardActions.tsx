import React from "react";
import {useAppDispatch} from "../../redux/common/hooks";
import {readReward, toggleSideMenu} from "../../redux/rewardSlice";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export interface RewardTableActionsProps {
    rewardUuid: string
}

export function RewardCardActions(props: RewardTableActionsProps) {
    const dispatch = useAppDispatch();

    return (
        <CardActions>
            <Button size="small" onClick={() => {
                dispatch(readReward(props.rewardUuid));
                dispatch(toggleSideMenu(true));
            }}>
                View
            </Button>
        </CardActions>
    );
}
