import { VocabDataState } from "./vocabDataSlice";
import { UserDataState } from "./userDataSlice";

export const vocabDataSelector = (state: { vocabData: VocabDataState }) => state.vocabData;

export const userDataSelector = (state: { userData: UserDataState }) => state.userData;