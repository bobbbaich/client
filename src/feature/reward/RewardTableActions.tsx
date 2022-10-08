import React from "react";
import {ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap";
import {useAppDispatch} from "../../redux/common/hooks";
import {deleteReward} from "../../redux/rewardSlice";

export function RewardTableActions(props: RewardTableActionsProps) {
    const dispatch = useAppDispatch();

    return (
        <DropdownButton as={ButtonGroup} variant="outline-primary" title="">
            <Dropdown.Item onClick={() => {
                dispatch(deleteReward(props.rewardUuid));
            }}>
                Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {
                dispatch(deleteReward(props.rewardUuid));
            }}>
                Delete
            </Dropdown.Item>
        </DropdownButton>
    );
}

export interface RewardTableActionsProps {
    rewardUuid: string
}
