import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Current from "./components/Current";
import Namaz from "./components/Namaz";
import Places from "./components/Places";



const App = (props) => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/places">
            <Places/>
          </Route>
          <Route path="/">
            <Header/>
            <Current/>
            <Namaz/>
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
