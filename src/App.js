import "./App.css";
import React from "react";
import Current from "./components/Current";
import Namaz from "./components/Namaz";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Current />
            <Namaz />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
