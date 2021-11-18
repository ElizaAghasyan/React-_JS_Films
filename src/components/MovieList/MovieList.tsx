import styles from './MovieList.module.scss';

interface Item {
    id?: string;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    name: string;
}

type MovieListProps = {
    items: Item[];
    category: {}
}

const MovieList = ({items} : MovieListProps) => {
    return (
        <div className={styles.cards}>
            {/*{*/}
            {/*    items?.map((item, i) => (*/}
            {/*        <div key={i}>{item}</div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
}

export default MovieList;
