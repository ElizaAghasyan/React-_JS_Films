import React, { useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@mui/styles";

import './Modal.scss';

const useStyles = makeStyles({
    close: {
        position: 'absolute',
        fontSize: '2.5em',
        top: '0.1em',
        right: '4.8em',
        color: '#fefefe',
        cursor: 'pointer'
    }
});

type modalType = {
    active?: boolean;
    children: JSX.Element;
    id?: string
}

const Modal = ({id, children, active} : modalType) => {
    return (
        <div id={id} className={`modal ${active ? `active` : ''} `}>
            {children}
        </div>
    );
}

type modalContentType = {
    onClose: () => void | null;
    children: JSX.Element;
    className: string
}
export const ModalContent = ({onClose, children}: modalContentType) => {
    const contentRef = useRef<HTMLDivElement>(null)!;
    const classes = useStyles();

    const closeModal = () => {
        if(contentRef.current && contentRef.current.parentElement) {
            contentRef.current &&  contentRef.current.parentElement.classList.remove('active');
        }
        if (onClose) onClose()
    }

    return (
        <div ref={contentRef} className="modal__content">
            {children}
            <div className="modal__content__close" onClick={closeModal}>
                <CloseIcon className={classes.close}/>
            </div>
        </div>
    );
}

export default Modal;
