import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Containers/Home";
// import Login from "./Containers/Login";
// import Transfer from "./Containers/Transfer";

class App extends Component {
render() { 
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<div>home</div>} />
            <Route exact path="/transfer" element={<div>home</div>} />
            <Route exact path="/Login" element={<div>home</div>} />
            <Route exact path="*" element={<div>Not Found</div>} />
          </Routes>
        </Router>
      </div>
  )
}
}

export default App;
