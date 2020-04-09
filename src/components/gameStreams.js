//click game get top streams for game click stream -> embed add a way to follow channels mongodb save
import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import useGetData from "../hook";

function GameStreams() {
  const [streams] = useGetData();
  let name = "";
  if (streams[0] !== undefined) {
    name = streams[0].gameName.toUpperCase();
  }
  return (
    <div className="App-container">
      <div className="title-container">
        <h1 className="title">{name} STREAMS</h1>
      </div>
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
                  <h4 className="stream-title" id="channel-text">
                    {channel.title}
                  </h4>
                </Link>
                <h5 className="user-name" id="channel-text">
                  {channel.user_name}
                </h5>
                <Link to={`/game/${channel.game_id}`}>
                  <h5 className="user-name" id="channel-text">
                    {channel.gameName}
                  </h5>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default GameStreams;
