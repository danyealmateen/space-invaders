import { useEffect, useState } from "react";
import Player from "../Player/Player";
import Alien from "../Alien/Alien";

const GameBoard = () => {
  const initialAlienPosition = [
    { x: 10, y: 10 },
    { x: 20, y: 10 },
    { x: 30, y: 10 },
  ];

  const unitSize = 30;

  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 95 });
  const [alienPosition, setAlienPosition] = useState(initialAlienPosition);

  useEffect(() => {
    const gameLoop = () => {
      requestAnimationFrame(gameLoop);
    };
  }, []);

  return (
    <div className="game-board" style={{}}>
      {alienPosition.map((pos, index) => (
        <Alien key={index} initialPosition={pos} />
      ))}
      <Player initialPosition={playerPosition} />
    </div>
  );
};

export default GameBoard;
