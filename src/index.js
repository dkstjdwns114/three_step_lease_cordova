import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : "http://52.79.102.189:8080/";

ReactDOM.render(<App />, document.getElementById("root"));
