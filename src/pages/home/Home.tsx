import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import {category, movieType} from "../../config/movieApi";
import movieApi from '../../config/movieApi';

import DashboardIcon from '@mui/icons-material/Dashboard';
import MovieList from "../../components/MovieList/MovieList";
const styles = require("./Home.module.scss");

const navigation = [
    {
        display: 'Popular',
        path: '/popular'
    },
    {
        display: 'Trending',
        path: '/trending'
    },
    {
        display: 'Top Rated',
        path: '/top_rated'
    },
    {
        display: 'Coming Soon',
        path: '/coming_soon'
    },
]

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
            <section className={styles.content}>
                <div className={styles.button_content}>
                    <ul>
                        {
                            navigation.map((heading, i) => (
                                <li value={heading.display} key={i} className={styles.buttons}>
                                    {heading.display}
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles.icons}>
                        <DashboardIcon style={{color: '#d6d7d7', fontSize: '2.8em', margin: '-1px 5px'}}/>
                        <DashboardIcon style={{color: '#3bb3df', fontSize: '2.5em'}}/>
                    </div>
                </div>
            </section>
            <MovieList items={movie} category={category.movie} />
        </div>
    );
}

export default Home;
