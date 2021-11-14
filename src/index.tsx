import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ErrorBoundary} from "react-error-boundary";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <ErrorBoundary
        FallbackComponent={App}
        onError={(error, errorInfo) => console.log({ error, errorInfo })}
    >
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </React.StrictMode>,
    </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
