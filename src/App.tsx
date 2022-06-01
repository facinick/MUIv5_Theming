import Container from "@mui/material/Container";
import React from "react";
import "./App.css";
import { Main } from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header style={{ height: "100px" }} className="App-header">
        <NavBar />
      </header>
      <main>
        <Container maxWidth="md">
          <Main />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
