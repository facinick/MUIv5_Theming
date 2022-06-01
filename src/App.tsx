import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Main } from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <Stack direction="column" spacing={2}>
        <header>
          <NavBar />
        </header>
        <main>
          <Container maxWidth="md">
            <Main />
          </Container>
        </main>
      </Stack>
    </div>
  );
}

export default App;
