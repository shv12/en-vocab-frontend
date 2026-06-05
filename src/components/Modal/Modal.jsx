import { ModalOverlay, ModalContent } from "./Modal.styled";

export function Modal({ onOverlayClick, children }) {
    function handleOverlayClick(e) {
        if (e.currentTarget === e.target) {
            onOverlayClick();
        }
    }

    return (<ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>{ children}</ModalContent>
    </ModalOverlay>);
}