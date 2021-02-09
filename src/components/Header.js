import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../components/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/places">
          <LocationOnIcon
            className="header_icon"
            style={{ fontSize: "40px" }}
          />
        </Link>
      </header>
    </React.Fragment>
  );
}
