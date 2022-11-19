import React from "react";
import {useAppDispatch} from "../../redux/common/hooks";
import {readReward, toggleDrawer} from "../../redux/reward.slice";
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
                dispatch(toggleDrawer(true));
            }}>
                View
            </Button>
        </CardActions>
    );
}
