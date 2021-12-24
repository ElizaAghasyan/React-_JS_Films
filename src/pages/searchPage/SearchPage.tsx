import {useLocation} from "react-router-dom";
import {category, getMovieList, movieType, searchFilms} from "../../config/movieApi";
import {useEffect, useState} from "react";
import MovieList from "../../components/movieList/MovieList";
import Loading from "../../components/loading/Loading";
import { StateProperties } from "../home/Home";
import Skeleton from 'react-loading-skeleton';

const styles = require('./SearchPage.module.scss');

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState<StateProperties[]>([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(false)

    const { search } = useLocation()
    const query = new URLSearchParams(search)
    const keyword = query.get('keyword')
    console.log(keyword)

    useEffect(() => {
        const searchApi = async () => {
            let response;
            const params = {
                query: keyword
            }
            response = await searchFilms(category.movie, {params})
            setSearchValue(response.data.results.splice(0,8));
            setLoading(!loading)
            return response.data.results;
        }
        searchApi()
    }, [category, keyword])

    const loadMore = async () => {
        const params = {
            page: page + 1
        };
        let  response = await getMovieList(movieType.upcoming, {params});
        setSearchValue([...searchValue, ...response.data.results]);
        setPage(page + 1)
    }

    return (
        <>
            {
                loading ? <Skeleton duration={2} count={10} />  : (
                    <div className={styles.list}>
                        <h1 className={styles.list_query}>Search results for {keyword} </h1>
                        <MovieList item={searchValue}/>
                        <div className={styles.list_loadMore} onClick={loadMore}>
                            <Loading/>
                        </div>
                    </div>
                )

            }
        </>
    )
}
export default SearchPage;
