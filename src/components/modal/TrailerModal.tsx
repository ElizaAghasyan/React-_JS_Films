import {useRef} from "react";
import Modal, {ModalContent} from "./Modal";

import './Modal.scss';

type TrailerModalType = {
    id?: string;
};

const TrailerModal = ({id}: TrailerModalType )=> {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const onClose = () => iframeRef.current && iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${id}`}>
            <ModalContent onClose={onClose} className="modal__content">
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer" frameBorder="0" >
                </iframe>
            </ModalContent>
        </Modal>
    )
}

export default TrailerModal;
