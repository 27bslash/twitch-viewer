import { useState, useEffect } from "react";
import "./styles.css";
import api from "./api";

function useGetData() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    let url = "";
    id === undefined
      ? (url = "https://api.twitch.tv/helix/streams")
      : (url = `https://api.twitch.tv/helix/streams?game_id=${id}`);
    const getData = async () => {
      const result = await api.get(url);
      let dataArray = result.data.data;
      let gameIDs = dataArray.map((stream) => {
        return stream.game_id;
      });

      let baseURL = "https://api.twitch.tv/helix/games?";
      let queryParams = "";
      gameIDs.map((id) => {
        return (queryParams = queryParams + `id=${id}&`);
      });

      let finalURL = baseURL + queryParams;
      let gameNames = await api.get(finalURL);
      let gameNameArray = gameNames.data.data;
      let finalArray = dataArray.map((stream) => {
        stream.gameName = "";
        gameNameArray.map((name) => {
          if (stream.game_id === name.id) {
            return (stream.gameName = name.name);
          }
        });

        stream.thumbnail_url = stream.thumbnail_url
          .replace("{width}", 300)
          .replace("{height}", 168);
        return stream;
      });
      setStreams(finalArray);
    };
    getData();
  }, []);
  return [streams]
}
export default useGetData;
