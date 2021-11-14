import { useSelector } from "react-redux";
import { getBannerMovie } from "../../redux/movieSlice";
import { apiConfig }from "../../config/apiConfig";
import {useState} from "react";
// import StarRatingComponent from "react-star-rating-component";


import styles from './Banner.module.scss';

const Banner = () => {
    const movie = useSelector(getBannerMovie);
    const [show, setShow] = useState(false);

    const showOverview = () => {
        setShow(!show);
        console.log(show)
    }

    const background = apiConfig.imageURL(movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path)

    return (
        <div className={styles.banner} id="background"
             style={{
                 backgroundImage: `url(${background})`,
                 width: "100%"
             }}>
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
                        {/*<StarRatingComponent  name='app' value={5}/>*/}
                        <button>{movie?.vote_average}</button>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button>Watch Now</button>
                    <button onClick={showOverview}>View Info</button>
                </div>
                <div className={show ? `${styles.active} ${styles.details}` : `${styles.details}`}>
                    {movie?.overview}
                </div>
            </div>
        </div>
    )
}

export default Banner;
