import { Dispatch } from "redux";
import {
  getError,
  getInProgress,
  getSuccess,
  getAddWordSuccess,
  getDelWordSuccess,
} from "./vocabDataSlice";
import * as API from "@/services/api";
import { GenericAbortSignal } from "axios";

export const reduxAddWord =
  (params: {enWord?: string, ruTransl?: string, name?: string} = {}) =>
    async (dispatch: Dispatch) => {
      const { enWord = "", ruTransl = "", name = "" } = params;
    try {
      dispatch(getInProgress());
      const { addedWord } = await API.addWord(
        enWord ?? "",
        ruTransl ?? "",
        name !== "" ? name : undefined
      );
      dispatch(getAddWordSuccess(addedWord));
    } catch (err: any) {
      dispatch(getError(err.message));
    }
  };

export const reduxDelWord =
  (params: {wordId?: string, wordIndex?: number} = {}) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(getInProgress());
      // const data = await API.getVocab({ signal: params.signal ?? null });
      const data = await API.delWord(params.wordId ?? "");
      console.log("reduxDelWord :: data", data);
      if (data.success) {
        dispatch(getDelWordSuccess(params.wordIndex));
      } else {
        dispatch(
          getError(`Can not delete word with index ${params.wordIndex}`),
        );
      }
    } catch (err: any) {
      dispatch(getError(err.message));
    }
  };

export const getVocabData =
  (params: {signal?: GenericAbortSignal} = {}) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(getInProgress());
      const data = await API.getVocab({ signal: params.signal });
      dispatch(getSuccess(data?.vocab ?? []));
    } catch (err: any) {
      dispatch(getError(err.message));
    }
  };
