import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rewardReducer from '../rewardSlice';

export const store = configureStore({
  reducer: {
    reward: rewardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
