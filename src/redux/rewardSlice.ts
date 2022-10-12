import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./common/store";
import {CreateReward, Reward, UpdateReward} from "../model/reward";
import {rewardAPI} from "../api/reward.api";
import {Page} from "../model/page";

export enum ClientState {
    IDLE,
    LOADING,
    FAILED
}

export interface RewardState {
    reward?: Reward;
    rewards: Page<Reward>;
    status: ClientState;
    drawer: DrawerState;
}

export interface DrawerState {
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
    drawer: {
        isOpen: false
    },
};

export const createReward = createAsyncThunk(
    'reward/create',
    async (reward: CreateReward) => rewardAPI.create(reward)
        .then(it => it.data)
)

export const readAllRewards = createAsyncThunk(
    'reward/readAll',
    async () => rewardAPI.readAll()
        .then(it => it.data)
)
export const readReward = createAsyncThunk(
    'reward/read',
    async (uuid: string) => rewardAPI.read(uuid)
        .then(it => it.data)
)

export const updateReward = createAsyncThunk(
    'reward/update',
    async (reward: Reward) => rewardAPI.update(reward.uuid, reward as UpdateReward)
        .then(it => it.data)
)

export const deleteReward = createAsyncThunk(
    'reward/delete',
    async (uuid: string) => rewardAPI.delete(uuid)
)

export const rewardSlice = createSlice({
    name: 'reward',
    initialState,
    reducers: {
        toggleDrawer: (state, action: PayloadAction<boolean>) => {
            state.drawer.isOpen = action.payload;
            if (!state.drawer.isOpen) state.reward = initialState.reward;
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
                state.reward = action.payload;
                state.status = ClientState.IDLE;
            })
            .addCase(readReward.rejected, (state) => {
                state.status = ClientState.FAILED;
            });

        builder
            .addCase(createReward.pending, state => {
                state.status = ClientState.LOADING;
            })
            .addCase(createReward.fulfilled, (state) => {
                state.status = ClientState.IDLE;
            })
            .addCase(createReward.rejected, (state) => {
                state.status = ClientState.FAILED;
            });

        builder
            .addCase(deleteReward.pending, state => {
                state.status = ClientState.LOADING;
            })
            .addCase(deleteReward.fulfilled, (state) => {
                state.status = ClientState.IDLE;
            })
            .addCase(deleteReward.rejected, (state) => {
                state.status = ClientState.FAILED;
            });
    }
})

export default rewardSlice.reducer;

export const {toggleDrawer} = rewardSlice.actions;

export const selectReward = (state: RootState) => state.reward.reward;
export const selectRewards = (state: RootState) => state.reward.rewards;
export const selectDrawer = (state: RootState) => state.reward.drawer;
export const selectStatus = (state: RootState) => state.reward.status;
