import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import useGetData from "./../hook";
import api from "../api";

function Streams() {
  const [streams] = useGetData();
  const [game, setGame] = useState([]);
  // runOnce();
  return (
    <div className="App-container">
      <div className="cards">
        {streams.map((channel, key) => {
          return (
            <div className="card" key={key}>
              <div className="img-container">
                <Link to={`/stream/${channel.user_name}`}>
                  <img
                    src={channel.thumbnail_url}
                    alt="leave me alone warnings"
                  ></img>
                </Link>
                <p className="viewer-count">{channel.viewer_count}</p>
              </div>
              <div className="text-container">
                <Link to={`/stream/${channel.user_name}`}>
                  <h4 className="title" id="channel-text">
                    {channel.title}
                  </h4>
                </Link>
                <a
                  href={`https://twitch.tv/${channel.user_name}`}
                  target="_blank"
                >
                  <h5 className="user-name" id="channel-text">
                    {channel.user_name}
                  </h5>
                </a>
                <h5 className="user-name" id="channel-text">
                  {channel.game_name}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Streams;
