import React from "react";
import ReactDOM from "react-dom/client";
import { index as RootRoute } from "./Route/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>,
);
