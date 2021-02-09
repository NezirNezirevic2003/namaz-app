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
import Cazin from "./gradovi/Cazin";
import Doboj from "./gradovi/Doboj";
import Mostar from "./gradovi/Mostar";
import Prijedor from "./gradovi/Prijedor";
import Zvornik from "./gradovi/Zvornik";
import Zivinice from "./gradovi/Zivinice";
import Bihac from "./gradovi/Bihac";
import Visoko from "./gradovi/Visoko";

const App = (props) => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/zvornik">
            <Header />
            <Current />
            <Zvornik />
          </Route>
          <Route path="/zivinice">
            <Header />
            <Current />
            <Zivinice />
          </Route>
          <Route path="/bihac">
            <Header />
            <Current />
            <Bihac />
          </Route>
          <Route path="/visoko">
            <Header />
            <Current />
            <Visoko />
          </Route>
          <Route path="/cazin">
            <Header />
            <Current />
            <Cazin />
          </Route>
          <Route path="/doboj">
            <Header />
            <Current />
            <Doboj />
          </Route>
          <Route path="/mostar">
            <Header />
            <Current />
            <Mostar />
          </Route>
          <Route path="/prijedor">
            <Header />
            <Current />
            <Prijedor />
          </Route>
          <Route path="/bijeljina">
            <Header />
            <Current />
            <Bijeljina />
          </Route>
          <Route path="/zenica">
            <Header />
            <Current />
            <Zenica />
          </Route>
          <Route path="/tuzla">
            <Header />
            <Current />
            <Tuzla />
          </Route>
          <Route path="/banja-luka">
            <Header />
            <Current />
            <BanjaLuka />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/">
            <Header />
            <Current />
            <Namaz />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
