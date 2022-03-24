import React from "react";
import { Provider } from 'react-redux';
import store from "../redux/store/store";
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";
import HelloWorld from "./HelloWorld";

const App = () => {

    return (
      <Provider store={store} >
      <React.Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<Greeting />} />
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </Router>
      </React.Fragment>
      </Provider>
    );
  }

export default App
