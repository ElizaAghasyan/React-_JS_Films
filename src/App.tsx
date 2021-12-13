import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "./redux/movieSlice";
import {Routes} from "./routes/Routes";
import {Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const styles = require("./App.module.scss");

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className={styles}>
      <Header />
      <Route render={() => (
        <div className={styles}>
          <Routes />
        </div>
      )}/>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
