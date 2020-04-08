import { useState, useEffect } from "react";
import "./styles.css";
import api from "./api";

function useGetData() {
  const [streams, setStreams] = useState([]);
  const [game, setGame] = useState([]);

  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    let url = "";
    let game_id;
    let arr = [];
    id === undefined
      ? (url = "https://api.twitch.tv/helix/streams")
      : (url = `https://api.twitch.tv/helix/streams?game_id=${id}`);
    console.log(url);
    const getData = async () => {
      const res = await api.get(url);
      let dataArray = res.data.data;
      let finalArray = await dataArray.map((item) => {
        game_id = item.game_id;
        item.thumbnail_url = item.thumbnail_url
          .replace("{width}", 300)
          .replace("{height}", 168);
        return item;
      });
      console.log(finalArray);
      setStreams(finalArray);
    };
    getData();
  }, []);
  return [streams, game];
}
export default useGetData;
