import React from "react";
import "../components/Places.css";
import { Link } from "react-router-dom";

export default function Places() {
  return (
    <React.Fragment>
      <header className="header_name">
        <h1>Mjesta</h1>
      </header>
      <div className="mjesta">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/banja-luka"
        >
          <div className="mjesto_1">
            <h1>Banja Luka</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/tuzla">
          <div className="mjesto_1">
            <h1>Tuzla</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/zenica">
          <div className="mjesto_1">
            <h1>Zenica</h1>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/bijeljina"
        >
          <div className="mjesto_1">
            <h1>Bijeljina</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/mostar">
          <div className="mjesto_1">
            <h1>Mostar</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/prijedor">
          <div className="mjesto_1">
            <h1>Prijedor</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/doboj">
          <div className="mjesto_1">
            <h1>Doboj</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/cazin">
          <div className="mjesto_1">
            <h1>Cazin</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/zvornik">
          <div className="mjesto_1">
            <h1>Zvornik</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/zivinice">
          <div className="mjesto_1">
            <h1>Živinice</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/bihac">
          <div className="mjesto_1">
            <h1>Bihać</h1>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/visoko">
          <div className="mjesto_1">
            <h1>Visoko</h1>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
