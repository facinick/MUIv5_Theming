import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
