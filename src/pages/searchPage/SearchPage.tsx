import {category, getMovieList, movieType, searchFilms} from "../../config/movieApi";
import {useEffect, useState} from "react";
import MovieList from "../../components/movieList/MovieList";
import Loading from "../../components/loading/Loading";
import { StateProperties } from "../home/Home";
import {useLocation} from "react-router-dom";

const styles = require('./SearchPage.module.scss');

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState<StateProperties[]>([])
    const [page, setPage] = useState(1);

    const { search }  = useLocation()
    const query = new URLSearchParams(search)
    const movie = query.get(`movie`);

    useEffect(() => {
        const searchApi = async () => {
            if(!query) {
                return
            }
            let response;
            const params = {
                query: movie
            }
            try {
                response = await searchFilms(category.movie, {params})
                setSearchValue(response.data.results.splice(0,8));
                return response.data.results;
            }catch (e: any) {
                console.log(e)
            }
        }
        searchApi()
    }, [ movie ])

    const loadMore = async () => {
        const params = {
            page: page + 1
        };
        let  response = await getMovieList(movieType.upcoming, {params});
        setSearchValue([...searchValue, ...response.data.results]);
        setPage(page + 1)
    }

    return (
        <div className={styles.list}>
            <h1 className={styles.list_query}>Search results for {movie} </h1>
            <MovieList item={searchValue}/>
            <div className={styles.list_loadMore} onClick={loadMore}>
                <Loading/>
            </div>
        </div>
    )
}
export default SearchPage;
