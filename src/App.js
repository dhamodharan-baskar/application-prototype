import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Transfer from "./Containers/Transfer";
import Statement from "./Containers/Statement";

class App extends Component {
render() { 
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/transfer" element={<Transfer />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/statement" element={<Statement />} />
            <Route exact path="*" element={<div>Not Found</div>} />
          </Routes>
        </Router>
      </div>
  )
}
}

export default App;
