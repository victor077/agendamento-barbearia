import React from "react";

import App from "./App";
import ReactDOM from "react-dom/client";

import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <CssBaseline />
  </React.StrictMode>
);
