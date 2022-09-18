import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "./common/store";
import {Reward} from "../model/reward";
import {rewardAPI} from "../api/reward.api";
import {Page} from "../model/page";

export enum ClientState {
  IDLE,
  LOADING,
  FAILED
}

export interface RewardState {
  rewards: Page<Reward>;
  status: ClientState;
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
};

export const readAll = createAsyncThunk(
    'reward/fetchRewards',
    async () => rewardAPI.readAll()
)

export const createReward = createAsyncThunk(
    'reward/create',
    async (reward: Reward) => rewardAPI.create(reward)
)

export const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(readAll.pending, state => {
      state.status = ClientState.LOADING;
    })
    .addCase(readAll.fulfilled, (state, action) => {
      state.rewards = action.payload.data;
      state.status = ClientState.IDLE;
    })
    .addCase(readAll.rejected, (state) => {
      state.status = ClientState.FAILED;
    });

    builder
    .addCase(createReward.pending, state => {
      state.status = ClientState.LOADING;
    })
    .addCase(createReward.fulfilled, (state, action) => {
      console.log("created " + action.payload.data)
      state.status = ClientState.IDLE;
    })
    .addCase(createReward.rejected, (state) => {
      state.status = ClientState.FAILED;
    });
  }
})

export default rewardSlice.reducer;

// export const {} = rewardSlice.actions;

export const selectRewards = (state: RootState) => state.reward.rewards;
