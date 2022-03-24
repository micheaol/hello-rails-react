import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<Greeting />} />
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
