import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
render() { 
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<div>Home</div>} />
            <Route exact path="/transfer" element={<div>Transfer</div>} />
            <Route exact path="/statement" element={<div>statement</div>} />
            <Route exact path="*" element={<div>not found</div>} />
          </Routes>
        </Router>
      </div>
  )
}
}

export default App;
