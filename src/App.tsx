import React from "react";
import Container from "@mui/material/Container";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="app">
      <Container maxWidth="md">
        <Main />
      </Container>
    </div>
  );
}

export default App;
