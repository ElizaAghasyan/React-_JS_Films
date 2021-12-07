import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import { category, movieType } from "../../config/movieApi";
import movieApi from '../../config/movieApi';
import Navigation from "../../components/navigation/Navigation";
import MovieList from "../../components/movieList/MovieList";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";

const styles = require("./Home.module.scss");

export type StateProperties = {
    id: number;
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
            const response = await movieApi.getMovieList(movieType.popular, {params})
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
        let  response = await movieApi.getMovieList(movieType.upcoming, {params});
        setMovie([...movie, ...response.data.results]);
        setPage(page + 1)
    }

    const handleClick = (e: { target: HTMLElement }) => {
        const getData = async () => {
            let response = null;
            let li = e.target.innerText
            const params = {}
            switch (li) {
                case 'Top Rated':
                    response = await movieApi.getMovieList(movieType.top_rated, {params});
                    break;
                case 'Trending':
                    response = await movieApi.getTrending(movieType.trending, {params});
                    break;
                case 'Coming Soon':
                    response = await movieApi.getMovieList(movieType.upcoming, {params: {page: 2}});
                    break;
                default:
                    response = await movieApi.getMovieList(movieType.popular, {params: {page: 2}});
                    break;
            }
            setMovie(response.data.results.slice(0, 16));
        }
        getData();
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            <Banner />
            <Navigation click={handleClick} />
            <MovieList item={movie} category={category.movie} />
            <div onClick={loadMore}>
                <Loading  />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
