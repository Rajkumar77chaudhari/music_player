import React from "react";
import "./sassStyle/App-container.scss";

const Song = ({ image, songName, alt, albumName, song }) => {
  const playSong = (e) => {
    e.preventDefault();
    const audio = new Audio(song);
    audio.play();
  };

  return (
    <div className="Song-container" onClick={playSong}>
      <img src={image} alt={alt} />
      <div className="Title-container">
        <p id="songName" className="titleName">
          {songName}
        </p>
        <p id="albumName" className="titleName">
          {albumName}
        </p>
      </div>
    </div>
  );
};

export default Song;
