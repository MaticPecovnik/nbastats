import React from "react";
import "./gametile.css";

let GameTile = props => {
  const cutoff = 3;

  if (props.gameData !== null && props.gameData !== undefined) {
    return (
      <div className="gameTile container-fluid">
        <div className="gameBasicInfo col-12">
          <center>
            {props.gameData[1].slice(0, 10)}
            <br></br>
            {props.gameData[2].city}
          </center>
        </div>
        <div className="homeTeam col-6">
          <center>
            <span className="homeaway">Home team</span>
            <br></br>
            <span className="names">
              {props.gameData[2].name.length > 4
                ? props.gameData[2].name.slice(0, cutoff) + "."
                : props.gameData[2].name}{" "}
              ({props.gameData[2].abbreviation})
            </span>
            <br></br>
            <span
              className="score"
              style={{
                color: props.gameData[3] > props.gameData[10] ? "green" : "red"
              }}
            >
              {props.gameData[3]}
            </span>
          </center>
        </div>
        <div className="awayTeam col-6">
          <center>
            <span className="homeaway">Away team</span>
            <br></br>
            <span className="names">
              {props.gameData[9].name.length > 4
                ? props.gameData[9].name.slice(0, cutoff) + "."
                : props.gameData[9].name}{" "}
              ({props.gameData[9].abbreviation})
            </span>
            <br></br>
            <span
              className="score"
              style={{
                color: props.gameData[10] > props.gameData[3] ? "green" : "red"
              }}
            >
              {props.gameData[10]}
            </span>
          </center>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default GameTile;
