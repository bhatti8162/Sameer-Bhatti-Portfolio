import React from "react";
import logo from "./logo.svg";
import "react-bootstrap";
import Header from "./Components/Header/Header";
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Resume from "./Components/Body/Resume";
import Live_Projects from "./Components/Body/Live_Projects";
import GitHub from "./Components/Body/GitHub";
import "./App.css";
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
