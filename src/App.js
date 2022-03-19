import React from 'react';
import logo from './logo.svg';
import 'react-bootstrap';
import Header from './Components/Header/Header'
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Resume from './Components/Body/Resume'
import Live_Projects from './Components/Body/Live_Projects'
import GitHub from './Components/Body/GitHub'
import './App.css';

function App() {
  return (
    // <Router>
    <div className="App">
      <Header />
      </div>
    // </Router>
  );
}

export default App;
