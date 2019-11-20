import React from "react";
import "./stats.css";
//import Chart from "chart.js";

const Stats = props => {
  console.log(props);
  console.log(props.playerInfo.first_name);

  if (props.playerInfo === {} && props.playerStats === {}) {
    return null;
  } else {
    return (
      <div className="statsHolder">
        <div className="basicInfo">{props.playerInfo.first_name}</div>
      </div>
    );
  }
};

export default Stats;
