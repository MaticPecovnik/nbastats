const teamRecord = (id, games) => {
  let record = {};
  try {
    if (games[0].home_team.id === id) {
      record = {
        id: id,
        name: games[0].home_team.full_name,
        abbreviation: games[0].home_team.abbreviation,
        wins: 0,
        losses: 0,
        conference: games[0].home_team.conference
      };
    } else {
      record = {
        id: id,
        name: games[0].visitor_team.full_name,
        abbreviation: games[0].visitor_team.abbreviation,
        wins: 0,
        losses: 0,
        conference: games[0].visitor_team.conference
      };
    }
  } catch (err) {
    console.log("games = ", games[0]);
  }

  for (let i = 0; i < games.length; i++) {
    let currentGame = games[i];

    if (currentGame.status === "Final") {
      if (
        (currentGame.home_team.id === record.id &&
          currentGame.home_team_score > currentGame.visitor_team_score) ||
        (currentGame.visitor_team.id === record.id &&
          currentGame.home_team_score < currentGame.visitor_team_score)
      ) {
        record.wins += 1;
      } else {
        record.losses += 1;
      }
    }
  }
  return record;
};

export default teamRecord;
