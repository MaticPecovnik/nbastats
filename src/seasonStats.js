const seasonStats = stats => {
  let playerStats = {
    stats: {
      ast: 0,
      blk: 0,
      stl: 0,
      dreb: 0,
      oreb: 0,
      fg3a: 0,
      fg3m: 0,
      fga: 0,
      fgm: 0,
      fta: 0,
      ftm: 0,
      pts: 0
    },
    gamesPlayed: 0
  };
  const interestingKeys = Object.keys(playerStats.stats);

  for (let i = 0; i < stats.length; i++) {
    for (let j = 0; j < interestingKeys.length; j++) {
      playerStats.stats[interestingKeys[j]] += stats[i][interestingKeys[j]];
    }
    if (stats[i].min !== "") {
      playerStats.gamesPlayed++;
    }
  }

  for (let j = 0; j < interestingKeys.length; j++) {
    playerStats.stats[interestingKeys[j]] =
      Math.round(
        (playerStats.stats[interestingKeys[j]] / playerStats.gamesPlayed) * 10
      ) / 10;
  }
  playerStats.stats = {
    ...playerStats.stats,
    fg3_perc: Math.round(
      (playerStats.stats.fg3m / playerStats.stats.fg3a) * 100
    ),
    fg_perc: Math.round((playerStats.stats.fgm / playerStats.stats.fga) * 100),
    ft_perc: Math.round((playerStats.stats.ftm / playerStats.stats.fta) * 100)
  };

  return playerStats;
};

export default seasonStats;
