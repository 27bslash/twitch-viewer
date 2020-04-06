import React, { useState, useEffect } from "react";
import "../styles.css";
import api from "../api";
import { Link } from "react-router-dom";

const url = "https://api.twitch.tv/helix/games/top";

function Games() {
  console.log("fg");
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(url);
      //console.log(result.data);
      let dataArray = result.data.data;
      console.log(dataArray);
      let finalArray = dataArray.map((item, key) => {
        item.box_art_url = item.box_art_url
          .replace("{width}", 300)
          .replace("{height}", 300);
        return item;
      });
      setGames(finalArray);
      console.log(finalArray);
    };
    fetchData();
  }, []);
  return (
    <div className="App-container">
      <div className="cards">
        {games.map((game, key) => {
          return (
            <div className="card" key={key}>
              <img src={game.box_art_url} alt="leave me alone warnings"></img>
              <div className="title">{game.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
