import { createSlice } from "@reduxjs/toolkit";

type VocabWord = {
  id: string,
  enWord: string,
  ruTransl: string[]
}

type InitialState = {
  vocabData: VocabWord[],
  isLoading: boolean,
  error: object | null,
}

const initialState = {
  vocabData: [],
  isLoading: false,
  error: null,
};

const vocabDataSlice = createSlice({
  name: "vocabData",
  initialState: initialState,
  reducers: {
    get(state: InitialState) {
      state.vocabData = [{ id: "1", enWord: "gist", ruTransl: ["суть"] }];
    },
    getAddWordSuccess(state: InitialState, action) {
      state.isLoading = false;
      state.error = null;
      // console.log("getAddWordSuccess :: action.payload", action.payload);
      // console.log("getAddWordSuccess :: state.vocabData", state.vocabData);

      state.vocabData.splice(0, 0, action.payload);
    },
    getDelWordSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      // console.log("getAddWordSuccess :: action.payload", action.payload);
      // console.log("getAddWordSuccess :: state.vocabData", state.vocabData);

      state.vocabData.splice(action.payload, 1);
    },
    getInProgress(state) {
      state.isLoading = true;
    },
    getSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.vocabData = action.payload;
    },
    getError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getInProgress,
  getError,
  getSuccess,
  getAddWordSuccess,
  getDelWordSuccess,
} = vocabDataSlice.actions;
export const vocabDataReducer = vocabDataSlice.reducer;
export type VocabDataState = InitialState;