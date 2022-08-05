import React from "react";
import "./sassStyle/App-container.scss";
import Logo from "./Logo";
import MusicList from "./MusicList";
import Player from "./Player";

const App = () => {
  return (
    <div className="App-container">
      <Logo />
      <MusicList />
      <Player />
    </div>
  );
};

export default App;
