import React from 'react';
import Home from "./pages/Home";

const styles = require("./App.module.scss");

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
