import "./styles/index";
import React from "react";
import ReactDOM from "react-dom/client";
import { RootRoute } from "./route/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>,
);
