import React from "react";
//import Chart from "chart.js";

const Stats = props => {
  console.log(props);

  if (props.playerInfo === {} && props.playerStats === {}) {
    console.log(props.playerInfo);
    return null;
  } else {
    console.log(true);
    return <div className="basicInfo">{props.playerStats.first_name}</div>;
  }
};

export default Stats;
