import React, { useState, useEffect } from "react";
import axios from "axios";
import Gamelet from "./gametile";
import "./resultscroll.css";

let ResultScroll = () => {
  const [games, setGames] = useState(null);
  const [page, setPage] = useState(0);
  const getToday = param => {
    let today = new Date();
    today.setDate(today.getDate() - param);
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return yyyy + "-" + mm + "-" + dd;
  };
  useEffect(() => {
    const request = {
      startDate: getToday(5),
      endData: getToday(0)
    };
    axios
      .get(
        `https://www.balldontlie.io/api/v1/games?start_date=${request.startDate}&&end_date=${request.endData}`
      )
      .then(response => {
        console.log(
          `API balldontilie request to get games between the dates ${request.startDate} and ${request.endData}`
        );
        const respArray = response.data.data.map(obj => {
          return Object.values(obj);
        });
        setGames(
          respArray.sort((a, b) => {
            return b[0] - a[0];
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleLeftClick = () => {
    switch (page) {
      case 0:
        setPage(0);
        break;
      default:
        setPage(page - 1);
    }
  };

  const handleRightClick = () => {
    switch (page) {
      case 5:
        setPage(5);
        break;
      default:
        setPage(page + 1);
        break;
    }
  };

  switch (games) {
    case null:
      return <div>Loading</div>;
    default: {
      return (
        <div className="gameScrolling">
          <button onClick={handleLeftClick} className="scrollButton backButton">
            {"<"}
          </button>
          <Gamelet gameData={games[4 * page + 0]} className="result1" />
          <Gamelet gameData={games[4 * page + 1]} className="result2" />
          <Gamelet gameData={games[4 * page + 2]} className="result3" />
          <Gamelet gameData={games[4 * page + 3]} className="result4" />
          <Gamelet gameData={games[4 * page + 4]} className="result5" />
          <button
            onClick={handleRightClick}
            className="scrollButton nextButton"
          >
            {">"}
          </button>
        </div>
      );
    }
  }
};

export default ResultScroll;
