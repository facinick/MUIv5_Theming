import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import MyThemeProvider from "./theme/MyThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
