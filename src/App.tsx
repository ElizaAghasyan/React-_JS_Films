import React, {useEffect} from 'react';
import { hot } from 'react-hot-loader';
import Home from "./pages/Home";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies} from "./redux/movieSlice";

const styles = require("./App.module.scss");

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncMovies());
    }, [dispatch]);

  return (
    <div className={styles}>
      <Home />
    </div>
  );
}

export default hot(module)(App);
