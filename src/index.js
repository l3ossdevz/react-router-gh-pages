import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const disableLog = () => {};

if (process.env.NODE_ENV !== "development") {
    console.log = disableLog;
    console.warn = disableLog;
    console.error = disableLog;
}

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
