import React from "react";
import mySongs from "./mySongs";
import Song from "./Song";
const MusicList = () => {
  const showSongs = (item, index) => {
    return (
      <Song
        song={item.song}
        image={item.image}
        songName={item.songName}
        albumName={item.albumName}
        alt={item.alt}
        key={index}
      />
    );
  };
  return <div className="List-container">{mySongs.map(showSongs)}</div>;
};

export default MusicList;
