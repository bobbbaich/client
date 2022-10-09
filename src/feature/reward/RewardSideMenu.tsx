import React from 'react';
import {CircularProgress, SwipeableDrawer} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/common/hooks";
import {ClientState, selectCurrentReward, selectSideMenu, selectStatus, toggleSideMenu} from "../../redux/rewardSlice";
import {RewardCreateForm} from "./RewardCreateForm";
import {RewardEditForm} from "./RewardEditForm";

export function RewardSideMenu() {
    const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);
    const currentReward = useAppSelector(selectCurrentReward);
    const sideMenu = useAppSelector(selectSideMenu);

    const toggleDrawerOnEvent = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        dispatch(toggleSideMenu(open));
    };

    function renderRewardForm() {
        if (status == ClientState.IDLE && sideMenu.isOpen) {
            return currentReward ? <RewardEditForm currentReward={currentReward}/> : <RewardCreateForm/>;
        } else {
            return <CircularProgress/>;
        }
    }

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={sideMenu.isOpen}
            onClose={toggleDrawerOnEvent(false)}
            onOpen={toggleDrawerOnEvent(true)}
        >
            {renderRewardForm()}
        </SwipeableDrawer>
    );
}