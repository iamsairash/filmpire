import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
ReactDOM.createRoot(document.getElementById("root")).render(
  // Uses the new createRoot API
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
