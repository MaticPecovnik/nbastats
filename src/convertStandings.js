import teamID from "./getteambyID";

const convert = standings => {
  let standOut = [];

  for (let i = 0; i < standings.length; i++) {
    const id = standings[i].teamId;
    const teamInfo = teamID(id);

    standOut.push({
      name: teamInfo.name,
      shortName: teamInfo.shortName,
      logo: teamInfo.logo,
      rank: standings[i].conference.rank,
      win: standings[i].win,
      loss: standings[i].loss,
      gamesBehind: standings[i].gamesBehind
    });
  }

  return standOut;
};

export default convert;
