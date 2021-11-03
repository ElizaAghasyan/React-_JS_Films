import searchIcon from "../../assets/images/search.svg"

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
                    <img src={searchIcon} alt="search"/>
                </div>
            </div>
        </header>
    );
}

export default Header;