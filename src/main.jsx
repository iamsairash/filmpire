import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Uses the new createRoot API
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
