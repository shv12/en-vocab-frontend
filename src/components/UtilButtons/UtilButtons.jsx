import { confirmable, createConfirmation} from "react-confirm";
import { DialogOverlay, Dialog } from "./UtilButtons.styled";

const ConfirmDialog = ({ show, proceed, message }) => {
    return (
        <DialogOverlay className={`dialog-overlay ${show ? 'show' : 'hide'}`}>
            <Dialog className="dialog">
                <p>{message}</p>
                <button type="button" onClick={() => proceed(true)}>Yes</button>
                <button type="button" onClick={() => proceed(false)}>No</button>
            </Dialog>
        </DialogOverlay>
    );
}

const confirm = createConfirmation(confirmable(ConfirmDialog));

function UtilButtons({ onClearVocab, onSprintClick }) {
    async function handleClearClick() {
        const result = await confirm({ message: 'Do you really want to clear vocabulary?' });
        if (result) {
            onClearVocab();
        }
    }

    const handleSprintClick = () => {
        onSprintClick();
    }

    return (<div>
        <button type="button" onClick={handleClearClick }>Clear vocabulary</button>
        <button type="button" onClick={handleSprintClick }>Sprint</button>
    </div>);
}

export default UtilButtons;