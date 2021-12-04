import React, { useEffect, useRef } from "react";
import movieApi, { category } from "../../config/movieApi";

import './TrailerModal.scss';
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    close: {
        position: 'absolute',
        fontSize: '2.5rem',
        top: '1.1rem',
        right: '1rem',
        color: '#fefefe',
        cursor: 'pointer'
    }
});

type TrailerModalType = {
    active: boolean;
    id: number
};

const TrailerModal = ({ active, id }: TrailerModalType ) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const modalRef = useRef<HTMLIFrameElement>(null);
    const classes = useStyles();

    useEffect(() => {
        const getVideos = async () => {
            let  videos;
            if(id) {
                videos = await movieApi.getVideos(category.movie, id);
            }

            if (videos?.data.results && videos.data.results.length > 0) {
                const videSrc = 'https://www.youtube.com/embed/' + videos.data.results[0].key;
                iframeRef.current && iframeRef.current.setAttribute('src', videSrc);
            }
        }
        getVideos()
    }, )

    const onClose = () => {
        iframeRef.current && iframeRef.current.setAttribute('src', '');
        modalRef.current && modalRef.current.classList.remove('modal_active');
    }

    return (
        <div ref={modalRef} className={active ? `modal modal_active` : `modal`}>
            <div className="modal__content">
                <iframe ref={iframeRef} width="100%" height="450px" title="trailer" frameBorder="0" >
                </iframe>
            </div>
            <CloseIcon onClick={onClose} className={classes.close} />
        </div>
    )
}

export default TrailerModal;
