import React from "react";
import Container from "@mui/material/Container";
import { Main } from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Container maxWidth="md">
          <Main />
        </Container>
      </main>
    </div>
  );
}

export default App;
