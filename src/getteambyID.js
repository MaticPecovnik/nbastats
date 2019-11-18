const teamID = id => {
  const IDlist = [
    {
      teamID: "1",
      name: "Atlanta Hawks",
      shortName: "ATL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png"
    },
    {
      teamID: "2",
      name: "Boston Celtics",
      shortName: "BOS",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"
    },
    {
      teamID: "4",
      name: "Brooklyn Nets",
      shortName: "BKN",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png"
    },
    {
      teamID: "5",
      name: "Charlotte Hornets",
      shortName: "CHA",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"
    },
    {
      teamID: "6",
      name: "Chigaco Bulls",
      shortName: "CHI",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png"
    },
    {
      teamID: "7",
      name: "Cleveland Cavaliers",
      shortName: "CLE",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png"
    },
    {
      teamID: "8",
      name: "Dallas Mavericks",
      shortName: "DAL",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png"
    },
    {
      teamID: "9",
      name: "Denver Nuggets",
      shortName: "DEN",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png"
    },
    {
      teamID: "10",
      name: "Detroit Pistons",
      shortName: "DET",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/800px-Pistons_logo17.svg.png"
    },
    {
      teamID: "11",
      name: "Goldent State Warriors",
      shortName: "GSW",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png"
    },
    {
      teamID: "14",
      name: "Houston Rockets",
      shortName: "HOU",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png"
    },
    {
      teamID: "15",
      name: "Indiana Pacers",
      shortName: "IND",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png"
    },
    {
      teamID: "16",
      name: "LA Clippers",
      shortName: "LAC",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png"
    },
    {
      teamID: "17",
      name: "Los Angeles Lakers",
      shortName: "LAL",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png"
    },
    {
      teamID: "19",
      name: "Memphies Grizzlies",
      shortName: "MEM",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png"
    },
    {
      teamID: "20",
      name: "Miami Heat",
      shortName: "MIA",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png"
    },
    {
      teamID: "21",
      name: "Millwaukee Bucks",
      shortName: "MIL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png"
    },
    {
      teamID: "22",
      name: "Minnesota Timberwolves",
      shortName: "MIN",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png"
    },
    {
      teamID: "23",
      name: "New Orleans Pelicans",
      shortName: "NOP",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png"
    },
    {
      teamID: "24",
      name: "New York Knicks",
      shortName: "NYK",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png"
    },
    {
      teamID: "25",
      name: "Oklahoma City Thunder",
      shortName: "OKC",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png"
    },
    {
      teamID: "26",
      name: "Orlando Magic",
      shortName: "ORL",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png"
    },
    {
      teamID: "27",
      name: "Philadelphia 76ers",
      shortName: "PHI",
      logo: "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png"
    },
    {
      teamID: "28",
      name: "Pheonix Suns",
      shortName: "PHX",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png"
    },
    {
      teamID: "29",
      name: "Portland Trail Blazers",
      shortName: "POR",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png"
    },
    {
      teamID: "30",
      name: "Sacramento Kings",
      shortName: "SAC",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
    },
    {
      teamID: "31",
      name: "San Antioni Spurs",
      shortName: "SAS",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png"
    },
    {
      teamID: "38",
      name: "Toronto Raptors",
      shortName: "TOR",
      logo: "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png"
    },
    {
      teamID: "40",
      name: "Utah Jazz",
      shortName: "UTA",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png"
    },
    {
      teamID: "41",
      name: "Washington Wizards",
      shortName: "WAS",
      logo:
        "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"
    }
  ];

  for (let j = 0; j < IDlist.length; j++) {
    if (IDlist[j].teamID === id) {
      return IDlist[j];
    }
  }
};

export default teamID;
