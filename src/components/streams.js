import React, { useState, useEffect } from "react";
import "../styles.css";
import api from "../api";

const url = "https://api.twitch.tv/helix/streams";

function Streams() {
  const [streams, setStreams] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await api.get(url);
      let dataArray = res.data.data;
      let finalArray = dataArray.map((item, key) => {
        item.thumbnail_url = item.thumbnail_url
          .replace("{width}", 300)
          .replace("{height}", 168);
        return item;
      });
      setStreams(finalArray);
    };
    getData();
  }, []);
  return (
    <div className="App-container">
      <div className="cards">
        {streams.map((channel, key) => {
          return (
            <div className="card" key={key}>
              <a
                href={`https://www.twitch.tv/${channel.user_name}`}
                target="_blank"
              >
                <img
                  src={channel.thumbnail_url}
                  alt="leave me alone warnings"
                ></img>
              </a>
              <div className="title">{channel.title}</div>
              <div>{channel.user_name}</div>
              <div>{channel.viewer_count} live viewers</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Streams;
