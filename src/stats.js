import React from "react";
import "./stats.css";
import seasonStats from "./seasonStats";
import plotStats from "./plotStats";

import { Line } from "react-chartjs-2";

const Stats = props => {
  if (props.playerInfo === undefined || props.playerStats === undefined) {
    return <React.Fragment></React.Fragment>;
  } else {
    const sumStats = seasonStats(props.playerStats);
    const plotData = plotStats(props.playerStats);
    return (
      <div className="statsHolder">
        <div className="basicInfo">
          <center>
            <table className="infoTable">
              <tbody>
                <tr>
                  <td align="center">Name: </td>
                  <td align="center">
                    {props.playerInfo.first_name} {props.playerInfo.last_name}
                  </td>
                </tr>
                <tr>
                  <td align="center">Position: </td>
                  <td align="center">{props.playerInfo.position}</td>
                </tr>
                <tr>
                  <td align="center">Team: </td>
                  <td align="center">{props.playerInfo.team.full_name}</td>
                </tr>
                <tr>
                  <td align="center">Height: </td>
                  <td align="center">
                    {props.playerInfo.height_feet * 30.5 +
                      props.playerInfo.height_inches * 2.5}{" "}
                    cm
                  </td>
                </tr>
                <tr>
                  <td align="center">Weight: </td>
                  <td align="center">
                    {Math.round(props.playerInfo.weight_pounds * 0.45 * 100) /
                      100}{" "}
                    kg
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
        <div className="stats">
          <center>
            <table className="infoTable statsTable">
              <tbody>
                <tr>
                  <td align="right">Games played: </td>
                  <td align="center">{sumStats.gamesPlayed}</td>
                </tr>
                <tr>
                  <td align="right">Points: </td>
                  <td align="center">{sumStats.stats.pts}</td>
                </tr>
                <tr>
                  <td align="right">FG3: </td>
                  <td align="center">
                    {sumStats.stats.fg3m}/{sumStats.stats.fg3a} (
                    {sumStats.stats.fg3_perc}%)
                  </td>
                </tr>
                <tr>
                  <td align="right">FG: </td>
                  <td align="center">
                    {sumStats.stats.fgm}/{sumStats.stats.fga} (
                    {sumStats.stats.fg_perc}%)
                  </td>
                </tr>
                <tr>
                  <td align="right">FT:</td>
                  <td align="center">
                    {sumStats.stats.ftm}/{sumStats.stats.fta} (
                    {sumStats.stats.ft_perc}%)
                  </td>
                </tr>
                <tr>
                  <td align="right">Assists:</td>
                  <td align="center">{sumStats.stats.ast}</td>
                </tr>
                <tr>
                  <td align="right">Steals:</td>
                  <td align="center">{sumStats.stats.stl}</td>
                </tr>
                <tr>
                  <td align="right">Blocks:</td>
                  <td align="center">{sumStats.stats.blk}</td>
                </tr>
                <tr>
                  <td align="right">Rebounds:</td>
                  <td align="center">
                    {sumStats.stats.dreb + sumStats.stats.oreb}
                  </td>
                </tr>
                <tr>
                  <td align="right">Off./Def.:</td>
                  <td align="center">
                    {sumStats.stats.dreb}/{sumStats.stats.oreb}
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
        <div className="statsGraph">
          <Line data={plotData} />
        </div>
      </div>
    );
  }
};

export default Stats;
