import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import {getMovieList, getTrending, movieType} from "../../config/movieApi";
import Navigation from "../../components/navigation/Navigation";
import MovieList from "../../components/movieList/MovieList";
import Loading from "../../components/loading/Loading";

const styles = require("./Home.module.scss");

export type StateProperties = {
    id: number | string;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    name: string;
}

const Home = () => {
    const [movie, setMovie] = useState<StateProperties[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getPopular = async () => {
            const params = {page: 1}
            const response = await getMovieList(movieType.popular, {params})
                .catch((err: string) => {
                    console.log(err)
                })
            setMovie(response?.data.results.slice(0,12))
        }
        getPopular()
    }, []);

    const loadMore = async () => {
        const params = {
            page: page + 1
        };
        let  response = await getMovieList(movieType.upcoming, {params});
        setMovie([...movie, ...response.data.results]);
        setPage(page + 1)
    }

    const handleClick= (e: any) => {
        const getData = async () => {
            let response;
            let li = e.target.innerText
            const params = {}
            switch (li) {
                case 'Top Rated':
                    response = await getMovieList(movieType.top_rated, {params});
                    break;
                case 'Trending':
                    response = await getTrending(movieType.trending, {params});
                    break;
                case 'Coming Soon':
                    response = await getMovieList(movieType.upcoming, {params: {page: 2}});
                    break;
                default:
                    response = await getMovieList(movieType.popular, {params: {page: 2}});
                    break;
            }
            setMovie(response.data.results.slice(0, 16));
        }
        getData();
    }

    return (
        <div className={styles.wrapper}>
            <Banner />
            <Navigation click={handleClick} />
            <MovieList item={movie} />
            <div onClick={loadMore}>
                <Loading  />
            </div>
        </div>
    );
}

export default Home;
