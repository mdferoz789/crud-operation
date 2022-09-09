import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App1 from "./App1";
import App2 from "./App2";
import App3, { Parent } from "./App3";
import App4 from "./App4";
import App5 from "./App5";
// import App6 from "./App6";
import Produts from "./App6";
import AppMovies from "./AppMovies";
import App7 from "./App7";
import App8Api from "./App8Api";
import { App9Api } from "./App9Api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <Parent /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    {/* <App6 /> */}
    {/* <Produts/> */}
    {/* <AppMovies/>   */}
    <App7/>
    {/* <App8Api/> */}
    <App9Api/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
