import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {ErrorBoundary} from "react-error-boundary";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <ErrorBoundary
        FallbackComponent={App}
        onError={(error, errorInfo) => console.log({ error, errorInfo })}
    >
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.StrictMode>,
    </ErrorBoundary>,
  document.getElementById('root')
);
