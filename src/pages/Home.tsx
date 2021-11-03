import React from "react";
import Header from "../components/header/Header";

const styles = require("./Home.module.scss");

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
        </div>
    );
}

export default Home;