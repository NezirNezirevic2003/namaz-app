import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../components/Header.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Header(props) {
  return (
    <React.Fragment>
      <Router>
        <header className="header">
          <Switch>
            <Route>
              <LocationOnIcon
                className="header_icon"
                style={{ fontSize: "40px" }}
              />
            </Route>
          </Switch>
        </header>
      </Router>
    </React.Fragment>
  );
}
