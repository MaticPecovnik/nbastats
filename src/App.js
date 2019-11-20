import React from "react";
import ResultScroll from "./resultscroll";
import Standings from "./standings";
import Search from "./search";
import "./App.css";

//check out https://www.balldontlie.io/#introduction for stats

const App = () => {
  return (
    <div className="contentContainer">
      <div className="resultScroll">
        <ResultScroll />
      </div>
      <div className="standings">
        <Standings />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;

const Footer = () => {
  return (
    <div className="footerHolder">
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
