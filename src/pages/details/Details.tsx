import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import movieApi from "../../config/movieApi";
import { apiConfig } from "../../config/apiConfig";

import styles from './Details.module.scss';
import CastList from "./CastList";
import DetailVideos from "./DetailVideos";
import MovieCard from "../../components/movieCard/MovieCard";
import Header from "../../components/header/Header";

type detailTypes = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    name: string;
    genres: {
        name: string;
        id: number
    }[];
}

const Details = () => {
    const { category } = useParams<{category: string}>();
    const { id } = useParams<{id: string}>();

    const [items, setItems] = useState<detailTypes[] | any>([]);
    const [similar, setSimilar] = useState<detailTypes[] | any>([])

    useEffect(() => {
        const getSimilar = async () => {
            let  res = await movieApi.similar(category, id);
            setSimilar(res.data.results.slice(0, 5))
        }
        getSimilar()
    }, [category, id])

    useEffect(() => {
        const getDetails = async () => {
            let result = await movieApi.detail(category, id, {params: {}});
            window.scrollTo(0, 0)
            setItems(result.data);
        }
        getDetails()
    }, [category, id]);

    let background;
    items?.backdrop_path ? background = apiConfig.imageURL(items?.backdrop_path ? items?.backdrop_path : items?.poster_path)
        : background = null

    return (
        <div className={styles.details}>
            <div className={styles.header_styles}>
                <Link to='/'>
                    <Header />
                </Link>
            </div>
            <div className={styles.background} style={{backgroundImage: `url(${background})`}}>
                <div className={styles.background_content_background} style={{backgroundImage: `url(${apiConfig.imageURL(items.backdrop_path || items.poster_path)})`}}> </div>
                <div className={styles.background_info}>
                    <h1>{items.title}</h1>
                    <div className={styles.background_info_genres}>
                        {
                            items.genres && items.genres.slice(0, 5).map((genre: detailTypes, i: number) => (
                                <span key={i}>{genre.name}</span>
                            ))
                        }
                    </div>
                    <p className={styles.background_info_overview}>{items.overview}</p>
                    <div className={styles.castTitle}>
                        <h2>Cast</h2>
                        <CastList />
                    </div>

                </div>
            </div>
            <div className={styles.details_videoList}>
                <DetailVideos />
            </div>
            <div className={styles.details_similar}>
                {
                    similar && similar.map((item: detailTypes) => (
                        <div key={item.id} className={styles.details_similar_item}>
                            <MovieCard item={item}/>
                        </div>
                    ))

                }
            </div>
        </div>
    );
}

export default Details;
