import React, { Component } from "react";
import "./App.css";
import api from "./api.js";

const url = "https://api.twitch.tv/helix/streams";

// TODO add components folder, segregate this shit, learn bootstrap /react ROUTER use in index.js
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.getStreams();
  }
  async getStreams() {
    const res = await api.get(url);
    console.log(res.data.data);
  }
  render() {
    return (
      <div id="App">
        <h2 onClick={this.getStreams}>test</h2>
      </div>
    );
  }
}
export default App;
