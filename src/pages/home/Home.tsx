import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import { category, movieType } from "../../config/movieApi";
import movieApi from '../../config/movieApi';
import Navigation from "../../components/navigation/Navigation";

import MovieList from "../../components/MovieList/MovieList";
const styles = require("./Home.module.scss");

const Home = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getPopular = async () => {
            const params = {page: 1}
            const response = await movieApi.getMovieList(movieType.popular, {params})
                .catch((err: string) => {
                    console.log(err)
                })
            setMovie(response?.data.results.slice(0,13))
        }
        getPopular()
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <Banner />
            <Navigation />
            <MovieList items={movie} category={category.movie} />
        </div>
    );
}

export default Home;
