import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Graph from "./Component/Graph/Graph";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    
    <React.StrictMode>
      <App />
    </React.StrictMode>

    {/* <Graph /> */}
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
