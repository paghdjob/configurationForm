import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  multiForm: {
    formName: "testform",
  },
};

export const multiFormStoreReducer = createSlice({
  name: "multiForm",
  initialState,
  reducers: {
    incrementByAmounts: (state, action) => {
      let merged = {};
      let formObj = {};

      if (
        state.multiForm &&
        state.multiForm[action.payload.formName] &&
        state.multiForm[action.payload.formName][action.payload.field]
      ) {
        merged = state.multiForm[action.payload.formName][
          action.payload.field
        ] = action.payload.value;
        // console.log("new field and value adding  -->", merged)
        state.multiForm = { ...state.multiForm, ...merged };
      } else if (state.multiForm && state.multiForm[action.payload.formName]) {
        // console.log("new form and field  value adding  -->", action.payload.value)
        merged = state.multiForm[action.payload.formName][
          action.payload.field
        ] = action.payload.value;
        state.multiForm = { ...state.multiForm, ...merged };
      } else {
        // console.log("new form adding  -->", action.payload.formName)
        formObj = {
          [action.payload.formName]: {
            [action.payload.field]: action.payload.value,
          },
        };
        merged = { ...state.multiForm, ...formObj };
        state.multiForm = merged;
      }
    },
  },
});
export const { incrementByAmounts } = multiFormStoreReducer.actions;

export default multiFormStoreReducer.reducer;
