import { useEffect } from "react";
import { Vocabulary } from "@/components/Vocabulary"
import { AddWordForm } from "@/components/AddWordForm";
import { getVocabData } from "../redux/operations";
import { useAppDispatch } from "@/redux/store";

export const MainPage = () => {
    const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getVocabData({ signal: abortController.signal }));
    return () => abortController.abort();
  }, [dispatch]);

    return <div>MainPage
        <hr />
        <AddWordForm />
        <Vocabulary /></div>
}