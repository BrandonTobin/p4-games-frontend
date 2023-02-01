import React from "react";
import "../styles/Games.css";

function Game(props) {
  if (props.game) {
    return (
      <div id="all-games">
        <h1 className="game-title">{props.game.title}</h1>
        <img className="game-image" src={props.game.photo} alt="sports"></img>
        {props.developer ? (
          <h1 id="game-body"> Developer: {props.developer.name} </h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Game;