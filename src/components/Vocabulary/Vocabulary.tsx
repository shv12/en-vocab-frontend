import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
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

    return (<div className="border-2 border-green-900 rounded-lg mt-2 p-2">
        <h1 className="section-title">Vocabulary</h1>
        {reduxVocabData.isLoading && <div>LOADING...</div>}
        {!reduxVocabData.isLoading && reduxVocabData.error !==  null && <div>ERROR</div>}
        {!reduxVocabData.isLoading && reduxVocabData.error === null && (
            <ul>{reduxVocabData.vocabData.map(({ id, enWord, ruTransl, name }, index) => {
                const canDelete = globalName === "" || globalName === name || !name;
            return (<li key={id}>
                <span className="font-bold">{enWord}</span> - {ruTransl[0]}<sub className="text-sm font-bold text-gray-500">{name}</sub>
                {canDelete && <button type="button" onClick={() => handleDelWord(id, index)} className="ml-1"><FontAwesomeIcon icon={faCircleXmark} className="text-green-900" /></button>}
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