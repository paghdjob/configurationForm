import { configureStore } from "@reduxjs/toolkit";
import formStoreReducer from "./formStore";
import multiFormStoreReducer from './multiFormStore'

export const store = configureStore({
  reducer: {
    counter: formStoreReducer,
    multiForm: multiFormStoreReducer
  },
});
