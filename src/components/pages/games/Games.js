import React from "react";
import bolt from "../../../assets/icons/bolt-up-left.svg";
import Snake from "./Snake/Snake";

function Games() {
  return (
    <div className="game-container">
      <img src={bolt} alt={"bolt"} className="bolt-top-left" />
      <img src={bolt} alt={"bolt"} className="bolt-bottom-left" />
      <img src={bolt} alt={"bolt"} className="bolt-top-right" />
      <img src={bolt} alt={"bolt"} className="bolt-bottom-right" />
      <div className="game-canvas"></div>
      <div className="game-controls"></div>
    </div>
  );
}

export default Games;
