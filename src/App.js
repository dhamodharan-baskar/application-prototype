import React, { Component } from 'react';
import { BrowserRouter, Route, Routes , withRouter} from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Transfer from "./Containers/Transfer";
import Statement from "./Containers/Statement";
import PublicHeader from "./Components/PublicHeader";

class App extends Component {
render() { 
  return (
    <div className="App">
      <PublicHeader />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" {...this.props} element={<Home {...this.props} />} />
            <Route exact path="/transfer" element={<Transfer {...this.props} />} />
            <Route exact path="/Login" element={<Login  {...this.props} />} />
            <Route exact path="/statement" element={<Statement  {...this.props}/>} />
            <Route exact path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
}

export default App;
