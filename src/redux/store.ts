import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, UseDispatch } from "react-redux";
import { vocabDataReducer } from "./vocabDataSlice";
import { userDataReducer } from "./userDataSlice";

export const store = configureStore({
  reducer: {
    vocabData: vocabDataReducer,
    userData: userDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();