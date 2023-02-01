import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Games.css";
// import Games from "../components/Games";
import LoadingPlaceholder from "../components/LoadingPlaceholder";

function Games(props) {
  const [games, setGames] = useState([]);
  async function fetchGames() {
    try {
      const response = await fetch(BASE_URL);
      const games = await response.json();
      setGames(games);
    } catch (err) {
      console.log(err);
    }
  }
  const BASE_URL = `https://localhost:3000/games`;

  useEffect(() => {
    fetchGames();
  }, []);

  if (games) {
    return (
      <>
        <h1 className="Gamestitle">Game Review</h1>
        <div className="Games-flex">
          {games.map((game) => {
            return (
              <Link
                key={game.id}
                className="gamelink"
                to={`/games/${game._id}`}
              >
                <Games className="games" key={game.id} game={game} />
              </Link>
            );
          })}
        </div>
      </>
    );
  }

  return <LoadingPlaceholder />;
}
export default Games;