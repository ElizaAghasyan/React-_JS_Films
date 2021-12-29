import { useCallback, useState} from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {useHistory} from "react-router-dom";

const SearchFilms = () => {
    const history = useHistory();
    const [keyword, setKeyword] = useState('');

    const searches = useCallback(() => {
        if(keyword.trim().length > 0) {
            history.push(`/search?movie=${keyword}`);
        }
    }, [history, keyword])

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        if(e.keyCode === 13) {
            searches();
        }

        document.addEventListener('keyup', handleSubmit );
        return () => {
            document.removeEventListener('keyup', handleSubmit)
        }
    }, [searches])

    return (
        <>
            <form onSubmit={handleSubmit}>
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
            </form>
        </>
    );
}

export default SearchFilms;
