import styles from './MovieList.module.scss';
import MovieCard from "../movieCard/MovieCard";

interface Item {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    name: string;
}

type MovieListProps = {
    item: Item[];
    category: {}
}

const MovieList = (props: MovieListProps) => {
    return (
        <div className={styles.cards}>
            {
                props.item?.map((item ) => (
                    <MovieCard key={item.id} item={item} />
                ))
            }
        </div>
    );
}

export default MovieList;
