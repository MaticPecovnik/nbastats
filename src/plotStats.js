const plotStats = stats => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Points",
        fill: false,
        lineTension: 0.25,
        borderColor: "black",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "black",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 15,
        data: []
      },
      {
        label: "Assists",
        fill: false,
        lineTension: 0.25,
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 15,
        data: []
      },
      {
        label: "Rebounds",
        fill: false,
        lineTension: 0.25,
        borderColor: "blue",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 15,
        data: []
      }
    ]
  };

  for (let i = 0; i < stats.length; i++) {
    data.labels.push(i + 1);
    data.datasets[0].data.push(stats[i].pts);
    data.datasets[1].data.push(stats[i].ast);
    data.datasets[2].data.push(stats[i].reb);
  }

  return data;
};

export default plotStats;
