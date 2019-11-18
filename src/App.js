import React from "react";
import ResultScroll from "./resultscroll";
import Standings from "./standings";
import Search from "./search";
import "./App.css";

//check out https://www.balldontlie.io/#introduction for stats

const App = () => {
  return (
    <div className="container-fluid">
      <div className="flex-column">
        <div className="col-xs-12">
          <ResultScroll />
        </div>
        <br></br>
        <div className="row flex-row mainContainer">
          <div className="standings col-xs-4">
            <Standings />
          </div>
          <div className="search col-xs-8">
            <Search />
          </div>
        </div>
        <div className="col-xs-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

const Footer = () => {
  return (
    <div className="footer">
      <center>
        Made by Matic Pečovnik{"    "}
        <a
          href="https://github.com/MaticPecovnik/nbastats"
          className="footerLink fa fa-github"
          alt="github"
        ></a>
      </center>
    </div>
  );
};
