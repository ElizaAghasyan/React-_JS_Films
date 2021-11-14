import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";

const styles = require("./Home.module.scss");

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Banner />
        </div>
    );
}

export default Home;
