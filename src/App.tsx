import React from 'react';
import Home from "./pages/Home";

const styles = require("./App.module.scss");

const App = () => {
  return (
    <div className={styles}>
      <Home />
    </div>
  );
}

export default App;
