import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Vocabulary } from "@/components/Vocabulary"
import { AddWordForm } from "@/components/AddWordForm";
import { getVocabData, reduxAddWord } from "../redux/operations";
import { useAppDispatch } from "@/redux/store";

export const MainPage = () => {
    const dispatch = useAppDispatch();

  async function addWord({ enWord, ruTransl }: {enWord: string, ruTransl: string}) {
    // const { addedWord } = await API.addWord(enWord, ruTransl);
        dispatch(reduxAddWord({ enWord, ruTransl }));
    //     console.log("App :: addWord :: addedWord", addedWord);
    // setVocabData([addedWord, ...vocabData]);
  }


  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getVocabData({ signal: abortController.signal }));
    return () => abortController.abort();
  }, [dispatch]);

    return <div>MainPage
        <hr />
        <AddWordForm onSubmit={addWord}/>
        <Vocabulary /></div>
}