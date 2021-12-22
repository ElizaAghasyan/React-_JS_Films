import {useParams} from "react-router-dom";
import serverApi, {category} from "../../config/movieApi";
import {useEffect, useState} from "react";
import MovieList from "../../components/movieList/MovieList";

const styles = require('./SearchPage.module.scss');

const SearchPage = () => {
    const { keyword } = useParams<{keyword: string}>();
    const [searchValue, setSearchValue] = useState([])

    useEffect(() => {
        const searchApi = async () => {
            let response = null;
            const params = {
                query: keyword
            }
            response = await serverApi.search(category.movie, {params})
            setSearchValue(response.data.results.slice(0,9))
            return response.data.results;
        }
        searchApi()
    }, [category, keyword])

    return (
        <div className={styles.list}>
            <h1 className={styles.list_query}>Search results for {keyword} </h1>
            <MovieList item ={searchValue} />
        </div>
    )
}
export default SearchPage;
