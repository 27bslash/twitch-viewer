import React, { useState, useEffect } from "react";
import "../styles.css";
import api from "../api";
import { Link } from "react-router-dom";

const url = "https://api.twitch.tv/helix/games/top";

function Games() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await api.get(url);
      let dataArray = result.data.data;
      let finalArray = dataArray.map((item) => {
        item.box_art_url = item.box_art_url
          .replace("{width}", 300)
          .replace("{height}", 300);
        return item;
      });
      setGames(finalArray);
    };
    getData();
  }, []);
  return (
    <div className="App-container">
      <div className="title-container"></div>
      <div className="cards">
        {games.map((game, key) => {
          return (
            <div className="card" key={key}>
              <Link to={`game/${game.id}`}>
                <img src={game.box_art_url} alt="leave me alone warnings"></img>
              </Link>
              <div className="title">{game.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
