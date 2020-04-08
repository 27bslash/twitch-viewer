import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Streams from "./components/streams";
import Header from "./components/header";
import Games from "./components/games";
import Embed from "./components/embed";
import GameStreams from "./components/gameStreams";
function App() {
  return (
    <Router>
      <div className="App-container">
        <Header />
        <Route exact path="/" component={Streams} />
        <Route exact path="/Top-Games" component={Games} />
        <Route path="/stream/:id" component={Embed} />
        <Route path="/game/:id" component={GameStreams} />
      </div>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
