import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { vocabDataSelector } from "@/redux/selectors";
import { reduxDelWord } from "../../redux/operations";
import {useAppDispatch} from '@/redux/store';
import { userDataSelector } from "@/redux/selectors";


function Vocabulary({ vocabData=[] }) {
    const dispatch = useAppDispatch();
    const reduxVocabData = useSelector(vocabDataSelector);
    const userData = useSelector(userDataSelector);
                const globalName = userData.name;
    function handleDelWord(wordId: string, wordIndex: number) {
        console.log("handleDelWord :: wordIndex", wordIndex);

        dispatch(reduxDelWord({ wordId, wordIndex }));
}

    return (<div>
        <h1>Vocabulary</h1>
        {reduxVocabData.isLoading && <div>LOADING...</div>}
        {!reduxVocabData.isLoading && reduxVocabData.error !==  null && <div>ERROR</div>}
        {!reduxVocabData.isLoading && reduxVocabData.error === null && (
            <ul>{reduxVocabData.vocabData.map(({ id, enWord, ruTransl, name }, index) => {
                const canDelete = globalName === "" || globalName === name || !name;
            return (<li key={id}>
                {enWord} - {ruTransl[0]}<sub className="text-sm font-bold">{name}</sub>
                {canDelete && <button type="button" onClick={() => handleDelWord(id, index)} className="border-2 border-green-900 rounded-lg p-1">X</button>}
            </li>);
        }) }</ul>
        )}
    </div>);
}

Vocabulary.propTypes = {
    vocabData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        enWord: PropTypes.string.isRequired
    }))
};

export default Vocabulary;