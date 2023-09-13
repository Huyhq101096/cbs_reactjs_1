import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchCount } from "../../pages/CounterPage/counterAPI";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

const counterReducer = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterReducer.actions;
export default counterReducer.reducer;

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
      const response = await fetchCount(amount);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
