import { Link } from 'react-router-dom';
import SearchFilms from "./SearchFilms";

const styles = require("./Header.module.scss");

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <Link to='/'>
                    <h1>Films</h1>
                </Link>
                <SearchFilms />
            </div>
        </header>
    );
}

export default Header;
