
import {useEffect, useState} from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {useHistory} from "react-router-dom";

const styles = require("./Header.module.scss");

const SearchFilms = () => {
    const history = useHistory();
    const [keyword, setKeyword] = useState('');

    const search = async () => {
        if(keyword.trim().length > 0) {
            history.push(keyword);
        }
    }

    useEffect(() => {
        const enterEvt = (e: any) => {
            e.preventDefault();

            if(e.keyCode === 13) {
                search();
            }
        }
        document.addEventListener('keyup', enterEvt);
        return () => {
            document.removeEventListener('keyup', enterEvt)
        }
    }, [keyword, search]);

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
