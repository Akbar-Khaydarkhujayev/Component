import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./components/table/table.css";
import "./components/water/water.css";
import "./components/circle progress/circle.css";
import "./components/box progress/boxp-rogress.css";
import "./components/bar chart/bar-chart.css";
import "./components/circular chart/round-chart.css";
import "./components/share button/share-button.css";
import "./components/custom button/button.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </React.StrictMode>
);