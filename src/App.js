import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import History from "./components/History"
import { MDBContainer } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <MDBContainer className="App-header mt-5">
          <Switch>
          <Route path="/" exact component={Card} />
            <Route path="/history" component={History} />
          </Switch>
        </MDBContainer>
      </div>
    </Router>
  );
}

export default App;
