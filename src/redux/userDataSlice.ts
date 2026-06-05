import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    name: string,
    isLoading: boolean,
    error: any
}

const initialState: InitialState = {
    name: "",
    isLoading: false,
    error: null
}

const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    logInSuccess(state: InitialState, action) {
      state.isLoading = false;
      state.error = null;
      // console.log("getAddWordSuccess :: action.payload", action.payload);
      // console.log("getAddWordSuccess :: state.vocabData", state.vocabData);

      state.name = action.payload;
    },
    logOutSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      // console.log("getAddWordSuccess :: action.payload", action.payload);
      // console.log("getAddWordSuccess :: state.vocabData", state.vocabData);

      state.name = "";
    },
    getInProgress(state) {
      state.isLoading = true;
    },
    getError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { logInSuccess, logOutSuccess } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
export type UserDataState = InitialState;