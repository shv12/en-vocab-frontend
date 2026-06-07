import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import { Sprint } from "@/components/Sprint";
import { getVocabData } from "../redux/operations";

const SprintPage = () => {
    const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getVocabData({ signal: abortController.signal }));
    return () => abortController.abort();
  }, [dispatch]);

    return <div>Sprint page<hr className="mb-2" /><Sprint /></div>;
}

export default SprintPage;