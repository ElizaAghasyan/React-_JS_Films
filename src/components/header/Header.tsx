import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
const styles = require("./Header.module.scss");

const Header = () => {
    return (
        <div className={styles.header_content}>
            <Link to='/'>
                <h1>Films</h1>
            </Link>
            <div>
                <input
                    placeholder='Search Films'
                    onChange={(e) => e.target.value}
                />
                <SearchOutlinedIcon style={{fontSize: '2.3em', color: '#fff', margin: '0.4rem'}}/>
            </div>
        </div>
    );
}

export default Header;
