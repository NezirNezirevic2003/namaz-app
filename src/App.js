import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Current from "./components/Current";
import Namaz from "./components/Namaz";
import Places from "./components/Places";
import BanjaLuka from "./gradovi/BanjaLuka";
import Tuzla from "./gradovi/Tuzla";
import Zenica from "./gradovi/Zenica";
import Bijeljina from "./gradovi/Bijeljina";




const App = (props) => {
  return (
    <Router>
      <>
        <Switch>
        <Route path="/bijeljina">
            <Header/>
            <Current/>
            <Bijeljina/>
          </Route>
        <Route path="/zenica">
            <Header/>
            <Current/>
            <Zenica/>
          </Route>
          <Route path="/tuzla">
            <Header/>
            <Current/>
            <Tuzla/>
          </Route>
          <Route path="/banja-luka">
            <Header/>
            <Current/>
            <BanjaLuka/>
          </Route>
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
