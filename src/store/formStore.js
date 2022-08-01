import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'yogesh',
};

export const formStoreReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
        console.log('incrementByAmount---',state, action.payload)
        const p = action.payload.username;
      state.value = p;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  formStoreReducer.actions;

export default formStoreReducer.reducer;
