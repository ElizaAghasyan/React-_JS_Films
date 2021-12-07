import { Link } from "react-router-dom";
import { apiConfig } from "../../config/apiConfig";
import { category } from "../../config/movieApi";
import { useRef, useState } from "react";
import TrailerModal from "../modal/TrailerModal";

import styles from './MovieCard.module.scss';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";


const useStyles = makeStyles({
    play: {
        fontSize: '10rem',
        fill: '#3BB3DFFF',
        cursor: 'pointer'
    },
    close: {
        position: 'absolute',
        fontSize: '2.5em',
        top: '0.5em',
        left: '1em',
        color: '#fefefe',
        cursor: 'pointer'
    }
});

type movieCardProps = {
    item: {
        id: number;
        title: string;
        overview: string;
        poster_path: string;
        vote_average: number;
        backdrop_path: string;
        vote_count: number;
        name: string;
    }
}

const MovieCard = ({item}: movieCardProps) => {
    const [active, setActive] = useState<boolean>(false)
    const classes = useStyles();
    const detailsRef = useRef<HTMLIFrameElement | null>(null);
    const cardRef = useRef<HTMLIFrameElement | null>(null!);

    const link = '/' + category.movie + '/' + item?.id;

    const bg = apiConfig.w500(item?.poster_path || item?.backdrop_path);

    const setModalActive = () => setActive(!active);

    const handleClick = () => {
        if(detailsRef.current && detailsRef.current.classList.contains(styles.detailSide_active)) {
            detailsRef.current.classList.remove(styles.detailSide_active)
        }else {
            detailsRef.current && detailsRef.current.classList.add(styles.detailSide_active);
        }
    }

    return (
        <div ref={cardRef} className={styles.card}>
            <div className={`${styles.card_side_front} ${styles.card_side} `}>
                <div className={styles.card_pic} style={{backgroundImage: `url(${bg})`}}>
                </div>
                <Link to={link}>
                    <div className={styles.card_description}>
                        <div className={styles.card_description_header}>
                            <h3 className={styles.card_heading}>{item?.title || item?.name}</h3>
                            <p className={styles.card_genre}>Adventure Comedy Family</p>
                        </div>
                        <button className={styles.card_rating}>{item?.vote_average}</button>
                    </div>
                </Link>
            </div>
            <div ref={cardRef} className={`${styles.card_side_back} ${styles.card_side}`}>
                <PlayCircleFilledIcon onClick={setModalActive} className={classes.play}/>
                <h3 className={styles.card_watch}>Watch Now</h3>
                <button onClick={handleClick} className={styles.card_btn}>View Info</button>
            </div>
            <div ref={detailsRef} className={styles.detailSide}>
                <CloseIcon onClick={handleClick} className={classes.close}/>
                <div style={{backgroundImage: `url(${bg})`, height: '52rem'}}>
                    <div className={styles.content}>
                        <div className={styles.content_overlay}>
                            <h3>{item?.title || item?.name}</h3>
                            <p className={styles.card_genre}>Adventure Comedy Family</p>
                            <div className={styles.overview_style}>
                                <p className={styles.overview}>{item?.overview}</p>
                            </div>
                            <button onClick={setModalActive} className={`${styles.btn_overlay} ${styles.left}`}>Watch Now</button>
                            <Link to={link}>
                                <button onClick={setModalActive} className={`${styles.btn_overlay} ${styles.right}`}>See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <TrailerModal active={active} id={item?.id}/>
        </div>
    );
}

export default MovieCard;
