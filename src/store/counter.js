import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};
// note the principle on separation of concerns
// each slice should have related functionality

const counterSlice = createSlice({
  name: "counter", // every slice needs a name
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      // can now mutate the state directly
    },
    decrement(state) {
      state.counter--;
      // still not really mutating existing state because of how
      // package works internally
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }, // need this for this each particular slice
  // actions will be automatically called for us
  // do not have to write own if checks
});

export const counterActions = counterSlice.actions;
export default counterSlice;
