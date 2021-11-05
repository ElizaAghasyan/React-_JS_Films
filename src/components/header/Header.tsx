import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const styles = require("./Header.module.scss");

const Header: React.FC = (props) => {

    return (
        <header>
            <div className={styles.header_content}>
                <h1>Films</h1>
                <div>
                    <input
                        placeholder='Search Films'
                        onChange={(e) => e.target.value}
                    />
                    <SearchOutlinedIcon style={{fontSize: '3em', color: '#fff'}}/>
                </div>
            </div>
        </header>
    );
}

export default Header;
