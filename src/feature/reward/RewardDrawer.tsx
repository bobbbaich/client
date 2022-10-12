import React from 'react';
import {Container, SwipeableDrawer} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/common/hooks";
import {selectDrawer, toggleDrawer} from "../../redux/rewardSlice";
import {RewardForm} from "./RewardForm";

export function RewardDrawer() {

    const dispatch = useAppDispatch();
    const drawer = useAppSelector(selectDrawer);

    const toggleDrawerOnEvent = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key in ['Tab', 'Shift'])) {
            return;
        }
        dispatch(toggleDrawer(open));
    };

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={drawer.isOpen}
            onClose={toggleDrawerOnEvent(false)}
            onOpen={toggleDrawerOnEvent(true)}
        >
            <Container>
                {drawer.isOpen && drawer.isOpen === true && <RewardForm/>}
            </Container>
        </SwipeableDrawer>
    );
}