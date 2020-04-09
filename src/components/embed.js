import React from "react";
import "../styles.css";

function Embed() {
  return (
    <div className="app-container">
      <div className="vid-container">
        <div id="twitch-embed">
          <iframe title='mp5'
            src={`https://player.twitch.tv/?channel=${
              window.location.pathname.split("/")[2]
            }&!playsinline&!autoplay&!muted&controls`}
            width="1600"
            height="900"
            allowFullScreen="true"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Embed;
