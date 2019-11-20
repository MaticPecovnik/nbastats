import React, { useState, useEffect } from "react";
import StandingsTable from "./standingstable";
import convert from "./convertStandings";
import "./standings.css";
import axios from "axios";

let Standings = () => {
  const [standingsEast, setStandingsEast] = useState([]);
  const [standingsWest, setStandingsWest] = useState([]);
  const [conference, setConference] = useState("west");

  useEffect(() => {
    console.log(
      `NBA API request to get standings season ${new Date().getFullYear()}`
    );

    axios
      .get(
        `https://api-nba-v1.p.rapidapi.com/standings/standard/${new Date().getFullYear()}/conference/west`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "19909a7114mshd2048d3a54edfadp18f939jsn54e086a42a39"
          }
        }
      )
      .then(response => {
        setStandingsWest(
          convert(response.data.api.standings).sort((a, b) => {
            return a.rank - b.rank;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        `https://api-nba-v1.p.rapidapi.com/standings/standard/${new Date().getFullYear()}/conference/east`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "19909a7114mshd2048d3a54edfadp18f939jsn54e086a42a39"
          }
        }
      )
      .then(response => {
        setStandingsEast(
          convert(response.data.api.standings).sort((a, b) => {
            return a.rank - b.rank;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    conference === "west" ? setConference("east") : setConference("west");
  };

  return conference === "west" ? (
    <div className="standingsContainer">
      <center>
        <button onClick={handleClick} className="chooseConference">
          Toggle Conference
        </button>
      </center>
      <div className="standingsTable">
        <StandingsTable standings={standingsWest} />
      </div>
    </div>
  ) : (
    <div className="standingsContainer">
      <center>
        <button onClick={handleClick} className="chooseConference">
          Toggle Conference
        </button>
      </center>
      <div className="standingsTable">
        <StandingsTable standings={standingsEast} />
      </div>
    </div>
  );
};

export default Standings;
