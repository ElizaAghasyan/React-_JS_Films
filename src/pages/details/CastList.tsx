import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import movieApi  from "../../config/movieApi";
import { apiConfig } from "../../config/apiConfig";

import styles from './Details.module.scss';

type castTypes = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    name: string;
    profile_path: string
}

const CastList = () => {
    const { category } = useParams<{category: string}>();
    const { id } = useParams<{id: string}>();
    const [cast, setCast] = useState<castTypes[]>([]);

    useEffect(() => {
        const getCastList = async () => {
            let  result = await movieApi.credits(category, id);
            setCast(result.data.cast.slice(0,6));
        }
        getCastList()
    }, [category, id]);




    return (
        <div className={styles.cast}>
            {
                cast.map((item, i) => (
                    <div key={i} className={styles.cast_item}>
                        <div className={styles.cast_item_list}>
                            <div className={styles.cast_poster} style={{backgroundImage: `url(${apiConfig.w500(item.profile_path ? item.profile_path : '')})`}}>
                            </div>
                        </div>
                        <p className={styles.cast_item_names}>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CastList;
