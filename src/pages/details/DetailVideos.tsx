import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from '../../config/movieApi';

const DetailVideos = () => {
    const { category } = useParams<{category: string}>();
    const { id } = useParams<{id: string}>();
    const [videos, setVideos ] = useState<any[]>([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await movieApi.getVideos(category, id);
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

type videoProps = {
    item: {
        id: number | string;
        official: boolean;
        published_at: string;
        site: string;
        size: number;
        type: string;
        name: string;
        key: number
    }
}

const Video = ({item}: videoProps) => {
    const iframeRef = useRef<HTMLIFrameElement>(null!);

    useEffect(() => {
        const height = iframeRef.current && iframeRef.current.offsetWidth * 7 / 10 + 'px';
        iframeRef.current && iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <>
            <h2>{item.name}</h2>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                title="video"
                frameBorder="0"
            > </iframe>
        </>
    );
}

export default DetailVideos;
