import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {RewardCardActions} from "./RewardCardActions";
import {Reward} from "../../model/reward";

interface RewardCardProps {
    reward: Reward;
}

export function RewardCard(props: RewardCardProps) {

    return (
        <Grid item key={props.reward.uuid} xs={12} sm={6} md={4}>
            <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.reward.name}
                    </Typography>
                    <Typography>
                        This is a reward card.<br/>
                        With name <b>{props.reward.name}</b>.
                    </Typography>
                </CardContent>
                {props.reward.uuid && <RewardCardActions rewardUuid={props.reward.uuid}/>}
            </Card>
        </Grid>
    );
}
