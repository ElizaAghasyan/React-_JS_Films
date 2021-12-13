import { Link } from 'react-router-dom';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const styles = require("./Header.module.scss");

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <Link to='/'>
                    <h1>Films</h1>
                </Link>
                <div>
                    <input
                        placeholder='Search Films'
                        onChange={(e) => e.target.value}
                    />
                    <SearchOutlinedIcon style={{position: 'absolute', transform: 'scale(1.3)', right: '4rem', top: '2rem', color: '#fff'}}/>
                </div>
            </div>
        </header>
    );
}

export default Header;
