import React, { useState, useEffect } from "react";
import axios from "axios";
import getPlayer from "./getCorrectPlayerFromAPI";
import seasonStats from "./seasonStats";
import Stats from "./stats";
import "./search.css";

let Search = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerInfo, setPlayerInfo] = useState({});
  const [playerStats, setPlayerStats] = useState({});

  const handleChange = event => {
    setPlayerName(event.target.value);
  };

  const onclickSearch = () => {
    const playerNameArray = playerName.split(" ");
    let queryString = "&search=" + playerName.split(" ").join("&search=");

    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?per_page=100${queryString}`
      )
      .then(response => {
        let searchData = response.data.data;
        const player = getPlayer(playerNameArray, searchData);
        setPlayerInfo(player);
        axios
          .get(
            `https://www.balldontlie.io/api/v1/stats?per_page=100&seasons[]=${new Date().getFullYear()}&player_ids[]=${
              player.id
            }`
          )
          .then(response => {
            let stats = response.data.data;
            setPlayerStats(seasonStats(stats));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="searchHolder">
      <center>
        <div className="searchForm">
          <form>
            <label htmlFor="playerName" className="playerName">
              <b>Search: </b>
            </label>
            <input
              type="text"
              placeholder="Enter Player Name"
              value={playerName}
              onChange={handleChange}
              name="playerName"
              className="search-input"
              required
            ></input>
            <button
              type="submit"
              onClick={event => {
                event.preventDefault();
                onclickSearch();
              }}
              className="search-submit"
            >
              Do it!
            </button>
          </form>
        </div>
      </center>
      <Stats playerInfo={playerInfo} playerStats={playerStats} />
    </div>
  );
};

export default Search;
