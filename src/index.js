import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { loadFirstPicture } from "./util";

loadFirstPicture().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
