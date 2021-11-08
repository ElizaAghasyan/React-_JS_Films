import React from "react";
import Header from "../components/header/Header";

const styles = require("./Home.module.scss");

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
        </div>
    );
}

export default Home;
