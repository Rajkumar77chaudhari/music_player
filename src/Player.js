import React from "react";
import "./sassStyle/App-container.scss";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import mySongs from "./mySongs";

const Player = () => {
  const style = {
    fontSize: "37px",
  };

  const shuffle = (e) => {
    e.preventDefault();
    console.log("This is WORKING");
  };
  const prevSong = (e) => {
    e.preventDefault();
    console.log("This is WORKING");
  };

  const nextSong = (e) => {
    e.preventDefault();
    console.log("This is WORKING");
  };
  const repeat = (e) => {
    e.preventDefault();
    console.log("This is WORKING");
  };
  return (
    <div className="Player-container">
      <div className="Arrow-container">
        <KeyboardArrowUpIcon id="Arrow" />
      </div>
      <ShuffleIcon className="PlayerIcon" style={style} onClick={shuffle} />
      <SkipPreviousIcon
        className="PlayerIcon"
        style={style}
        onClick={prevSong}
      />
      <PlayArrowIcon
        className="PlayerIcon"
        name="play"
        style={style}
        // onClick={play}
      />

      <SkipNextIcon className="PlayerIcon" style={style} onClick={nextSong} />
      <RepeatIcon className="PlayerIcon" style={style} onClick={repeat} />
    </div>
  );
};

export default Player;
