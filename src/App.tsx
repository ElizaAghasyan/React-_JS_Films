import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "./redux/movieSlice";
import {Routes} from "./routes/Routes";
import {Route} from "react-router-dom";

const styles = require("./App.module.scss");

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className={styles}>
      <Route render={() => (
         <div className={styles}>
          <Routes />
        </div>
      )}/>
    </div>
  );
}

export default hot(module)(App);
