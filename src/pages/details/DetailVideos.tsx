import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getVideo} from '../../config/movieApi';
import Video from "./Video";

const DetailVideos = () => {
    const { category } = useParams<{category: string}>();
    const { id } = useParams<{id: string}>();
    const [videos, setVideos ] = useState<any[]>([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await getVideo(category, id);
            setVideos(res.data.results.slice(0, 4));
        }
        getVideos();
    }, [category, id]);

    return (
        <>
            {
                videos.map(item => (
                    <Video key={item.id} item={item} />
                ))
            }
        </>
    );
}


export default DetailVideos;
