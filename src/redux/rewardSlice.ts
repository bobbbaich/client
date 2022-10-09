import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./common/store";
import {Reward} from "../model/reward";
import {rewardAPI} from "../api/reward.api";
import {Page} from "../model/page";
import {useAppDispatch} from "./common/hooks";

export enum ClientState {
    IDLE,
    LOADING,
    FAILED
}

export interface RewardState {
    rewards: Page<Reward>;
    currentReward?: Reward
    status: ClientState;
    sideMenu: SideMenuState;
}

export interface SideMenuState {
    isOpen: boolean;
}

const initialState: RewardState = {
    rewards: {
        content: [],
        number: 0,
        numberOfElements: 0,
        totalElements: 0,
        totalPages: 0,
    },
    status: ClientState.IDLE,
    sideMenu: {
        isOpen: false
    },
};

export const readAllRewards = createAsyncThunk(
    'reward/readAll',
    async () => rewardAPI.readAll()
        .then(it => it.data)
)

export const createReward = createAsyncThunk(
    'reward/create',
    async (reward: Reward) => rewardAPI.create(reward)
)

export const readReward = createAsyncThunk(
    'reward/read',
    async (rewardUuid: string) => rewardAPI.read(rewardUuid)
        .then(it => it.data)
)

// export const deleteReward = createAsyncThunk(
//     'reward/delete',
//     async (rewardUuid: string) => rewardAPI.delete(rewardUuid)
// )

export const rewardSlice = createSlice({
    name: 'reward',
    initialState,
    reducers: {
        toggleSideMenu: (state, action: PayloadAction<boolean>) => {
            state.sideMenu.isOpen = action.payload;
            if (!state.sideMenu.isOpen) {
                state.currentReward = initialState.currentReward;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(readAllRewards.pending, state => {
                state.status = ClientState.LOADING;
            })
            .addCase(readAllRewards.fulfilled, (state, action) => {
                state.rewards = action.payload;
                state.status = ClientState.IDLE;
            })
            .addCase(readAllRewards.rejected, (state) => {
                state.status = ClientState.FAILED;
            });

        builder
            .addCase(readReward.pending, state => {
                state.status = ClientState.LOADING;
            })
            .addCase(readReward.fulfilled, (state, action) => {
                state.currentReward = action.payload;
                state.status = ClientState.IDLE;
            })
            .addCase(readReward.rejected, (state) => {
                state.status = ClientState.FAILED;
            });

        builder
            .addCase(createReward.pending, state => {
                state.status = ClientState.LOADING;
            })
            .addCase(createReward.fulfilled, (state, action) => {
                state.status = ClientState.IDLE;
            })
            .addCase(createReward.rejected, (state) => {
                state.status = ClientState.FAILED;
            });
    }
})

export default rewardSlice.reducer;

export const {toggleSideMenu} = rewardSlice.actions;

export const selectRewards = (state: RootState) => state.reward.rewards;
export const selectCurrentReward = (state: RootState) => state.reward.currentReward;
export const selectSideMenu = (state: RootState) => state.reward.sideMenu;
export const selectStatus = (state: RootState) => state.reward.status;
