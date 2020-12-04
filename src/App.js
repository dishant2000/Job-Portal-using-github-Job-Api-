import React from "react";
import "./App.css";
import GithubJob from "./components/GithubJob";
import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>

        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">React projects</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav style={{ padding: "5px", margin: "5px" }}>
                <Link to="/">Home</Link>
              </Nav>
              <Nav style={{ padding: "5px", margin: "5px" }}>
                <Link to="/about">About</Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path = '/'>
              <Home/>
        </Route>
        <Route path = "/about">
          <About/>
        </Route>
        <Route path="/githubapi" component = {GithubJob}/>     
      </Router>
      
    </div>
  );
}

export default App;
