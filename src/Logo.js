import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Logo = () => {
  const style = {
    fontSize: "37px",
    color: "white",
  };
  return (
    <div className="Logo-container">
      <MusicNoteIcon className="logo" style={style} />
      <h1>MYmusic</h1>
    </div>
  );
};

export default Logo;
