import React, {useState} from 'react';
import Header from "./components/Header";
import Exchange from "./components/Exchange";
import Update from "./components/Update";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route
            exact
            path="/"
            component={() => {
              return (
                <Exchange
                />
              );
            }}
          />
          <Route
            exact
            path="/Update"
            component={() => {
              return (
                <Update
                />
              );
            }}
          />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
