import { useState } from "react";
import { useSelector } from "react-redux";
import movieApi, { category } from "../../config/movieApi";
import TrailerModal from "../modal/TrailerModal";
import { getBannerMovie } from "../../redux/movieSlice";
import { apiConfig }from "../../config/apiConfig";
import { Rating } from "react-simple-star-rating";

import styles from './Banner.module.scss';

const Banner = () => {
    const movie = useSelector(getBannerMovie);
    const [show, setShow] = useState<boolean>(false);
    const [rating, setRating] = useState<number | null>(movie?.vote_average);
    let background;

    const handleRating = () => setRating(rating)

    const showOverview = () => setShow(!show);

    movie?.backdrop_path ? background = apiConfig.imageURL(movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path)
        : background = null

    const setModalActive = async () => {
        const modal = document.querySelector<HTMLElement>(`#modal_${movie.id}`)!;
        const iframe = modal?.querySelector('.modal__content > iframe')!;
        const modalContent = modal?.querySelector( '.modal__content')!;

        const videos = await movieApi.getVideos(category.movie, movie?.id);

        if (videos.data.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.data.results[0].key;
            iframe.setAttribute('src', videSrc);
        } else {
            modalContent.innerHTML = 'No trailer';
        }
        modal.classList.toggle('active');
    }

    return (
        <div className={styles.banner}
             style={{
                backgroundImage: `url(${background})`,
                 width: "100%"
             }}
        >
            <div className={styles.banner_content}>
                <div className={styles.banner_content_info}>
                    <h2>{movie?.title || movie?.name}</h2>
                    <ul>
                        <li>Adventure</li>
                        <li>Fantasy</li>
                        <li>Family</li>
                        <li>Comedy</li>
                    </ul>
                    <div className={styles.stars}>
                        <Rating
                            size={20}
                            fillColor='#3bb3df'
                            emptyColor='#3bb3df'
                            onClick={handleRating}
                            ratingValue={movie?.vote_count}
                        />
                        <button>{movie?.vote_average}</button>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={setModalActive}>Watch Now</button>
                    <button onClick={showOverview}>View Info</button>
                </div>
                <div className={show ? `${styles.active} ${styles.details}` : `${styles.details}`}>
                    {movie?.overview}
                </div>
                <TrailerModal id={movie?.id}/>
            </div>
        </div>
    )
}

export default Banner;
