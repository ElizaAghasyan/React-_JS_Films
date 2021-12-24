import { useEffect, useState} from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {useHistory} from "react-router-dom";

const SearchFilms = () => {
    const history = useHistory();
    const [keyword, setKeyword] = useState('');

    const searches = () => {
        if(keyword.trim().length > 0) {
            history.push(`/search?movie=${keyword}`);
        }
    }

    useEffect(() => {
        const enterEvt = (e: KeyboardEvent) => {
            if(e.keyCode === 13) {
                searches();
            }
        }

        document.addEventListener('keyup', enterEvt );
        return () => {
            document.removeEventListener('keyup', enterEvt)
        }
    }, [keyword, searches]);

    return (
        <>
            <input
                type='text'
                placeholder='Search Films'
                value={keyword}
                onChange={(e) => {
                    e.preventDefault();
                    setKeyword(e.target.value)
                }}
            />
            <SearchOutlinedIcon style={{position: 'absolute', transform: 'scale(1.3)', right: '4rem', top: '2rem', color: '#fff'}} />
        </>
    );
}

export default SearchFilms;
