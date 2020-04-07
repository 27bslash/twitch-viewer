import React, { useState, useEffect } from "react";
import "../styles.css";
import ReactPlayer from "react-player";

function Embed() {
  console.log(`https://www.twitch.tv${window.location.pathname}`);
  return (
    <div className="app-container">
      <div className="vid-container">
        <div id="twitch-embed">
          <iframe
            src={`https://player.twitch.tv/?channel=${window.location.pathname}&!playsinline&!autoplay&!muted&controls`}
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
