import {useEffect, useRef} from "react";

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
            />
        </>
    );
}

export default Video;
