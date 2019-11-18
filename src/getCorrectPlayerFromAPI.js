const getPlayer = (playerNameArray, apiArray) => {
  let modPlayerArray = ["", ""];
  modPlayerArray[0] = playerNameArray[0];
  modPlayerArray[1] = playerNameArray
    .slice(1, playerNameArray.length)
    .join(" ");

  for (let i = 0; i < apiArray.length; i++) {
    if (
      (apiArray[i].first_name.toLowerCase() ===
        modPlayerArray[0].toLowerCase() &&
        apiArray[i].last_name.toLowerCase() ===
          modPlayerArray[1].toLowerCase()) ||
      (apiArray[i].first_name.toLowerCase() ===
        modPlayerArray[1].toLowerCase() &&
        apiArray[i].last_name.toLowerCase() === modPlayerArray[0].toLowerCase())
    ) {
      return apiArray[i];
    }
  }
};

export default getPlayer;
