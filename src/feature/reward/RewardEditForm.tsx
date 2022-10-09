import React, {useEffect} from 'react';
import {Reward} from "../../model/reward";

interface RewardEditFormProps {
    currentReward: Reward
}

export function RewardEditForm(props: RewardEditFormProps) {
    useEffect(() => {
        console.log("useEffect RewardEditForm")
    })

    return (
        <div>
            <p>Edit reward</p>
            <p>uuid: {props.currentReward && props.currentReward.uuid}</p>
            <p>name: {props.currentReward && props.currentReward.name}</p>
        </div>
    )
}