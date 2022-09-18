import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {Reward} from "../../model/reward";
import {rewardAPI} from "../../api/reward.api";
import {Page} from "../../model/page";

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
    page: 0,
    size: 0,
  },
  status: ClientState.IDLE,
};

export const readAll = createAsyncThunk(
    'reward/fetchRewards',
    async () => rewardAPI.readAll()
)

export const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    create: state => {
      console.log("create")
    }
  },
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
  }
})

export const {create} = rewardSlice.actions;

export const selectRewards = (state: RootState) => state.reward.rewards;

export default rewardSlice.reducer;
