import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Transfer from "./Containers/Transfer";
import Navbar from './Components/Navbar'

class App extends Component {
render() { 
  return (
    <div className="App">
      <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/transfer" element={<Transfer />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="*" element={<div>Not Found</div>} />
          </Routes>
        </Router>
      </div>
  )
}
}

export default App;
