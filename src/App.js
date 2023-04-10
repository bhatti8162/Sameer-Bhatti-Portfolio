import React from "react";
import logo from "./logo.svg";
import "react-bootstrap";
import Header from "./Components/Header/Header"
import "./App.css";
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";
import Home from "./Components/Body/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Header /> */}
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
