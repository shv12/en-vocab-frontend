import axios, { GenericAbortSignal } from "axios";

// axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.baseURL = "https://en-vocab-backend.onrender.com/api";

export const addWord = async (enWord: string, ruTransl: string, name?: string) => {
  const response = await axios.post("/vocab/addWord", {
    word: { enWord, ruTransl },
    name: name,
  });
  return response.data;
}

export const clearVocab = async () => {
  const response = await axios.get("/vocab/clear");
  return response.data;
}

export const delWord = async (wordId: string) => {
  try {
    const response = await axios.post("/vocab/delWord", {
      wordId,
    });
    return response.data;
  } catch (err) {
    console.log("api :: delWord :: ERROR :: ", err);
  }
}

export const getVocab = async ({ signal }: {signal?: GenericAbortSignal}) => {
  try {
    const response = await axios.get("/vocab/getVocab", { signal });
    console.log("api :: getVocab :: response", response);
    return response.data;
  } catch (err) {
    console.log("api :: getVocab :: ERROR :: ", err);
  }
}
