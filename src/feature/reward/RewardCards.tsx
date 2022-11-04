import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/common/hooks";
import Grid from "@mui/material/Grid";
import {readAllRewards, selectRewards} from "../../redux/reward.slice";
import {RewardCard} from "./RewardCard";

export function RewardCards() {
    const dispatch = useAppDispatch();
    const rewards = useAppSelector(selectRewards);

    useEffect(() => {
        dispatch(readAllRewards())
    }, [])

    return (
        <Grid container spacing={4}>
            {rewards.content.map((reward) => (
                <RewardCard key={reward.uuid} reward={reward}/>
            ))}
        </Grid>
    );
}
