import React from "react";
import "./standingstable.css";

let StandingsTable = props => {
  return (props.standings === undefined) === null ||
    props.standings === undefined ||
    props.standings.length === 0 ? null : (
    <table className="standingsTable">
      <tbody>
        <tr className="header">
          <th>#</th>
          <th></th>
          <th>Name</th>
          <th>Win</th>
          <th>Loss</th>
          <th>GB</th>
        </tr>
        {props.standings.map(obj => {
          return (
            <tr className="teamRow" key={obj.rank + obj.logo}>
              <td key={obj.rank}>{obj.rank}.</td>
              <td key={obj.logo}>
                <img src={obj.logo} alt="team logo" className="teamLogo"></img>
              </td>
              <td key={obj.name}>{obj.name}</td>
              <td key={obj.win + obj.name}>{obj.win}</td>
              <td key={obj.loss + obj.logo}>{obj.loss}</td>
              <td key={obj.gamesBehind}>{obj.gamesBehind}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  /*
    <div className="container-fluid">
      {props.standings.map(obj => {
        return (
          <div className="row standingsTable" key={obj.rank + obj.logo}>
            <div className="teamStanding col-xs-1" key={obj.rank}>
              {obj.rank}.
            </div>
            <div className="teamStanding col-xs-2" key={obj.logo}>
              <img src={obj.logo} alt="team logo" className="teamLogo"></img>
            </div>
            <div className="teamStanding col-xs-2" key={obj.name}>
              {obj.name}
            </div>
            <div className="teamStanding col-xs-1" key={obj.shortName}>
              {obj.shortName}
            </div>
            <div className="teamStanding col-xs-1" key={obj.win + obj.name}>
              {obj.win}
            </div>
            <div className="teamStanding col-xs-1" key={obj.loss + obj.logo}>
              {obj.loss}
            </div>
            <div className="teamStanding col-xs-1" key={obj.gamesBehind}>
              {obj.gamesBehind}
            </div>
          </div>
        );
      })}
    </div>*/
};

export default StandingsTable;
