import { useEffect, useState } from "react";
import { PlayerProps } from "../../../types.tsx";
import Projectiles from "../Projectiles/Projectiles.tsx";
import "./Player.css";

const Player: React.FC<PlayerProps> = ({ initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);
  const [projectiles, setProjectiles] = useState<
    Array<{ x: number; y: number }>
  >([]);
  const shipWidth = 50;
  const shipHeight = 50;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setPosition((position) => {
          const newPosition = { ...position, x: position.x - 50 };
          console.log("arrowleft nedtryckt", newPosition);
          return newPosition;
        });
      } else if (event.key === "ArrowRight") {
        setPosition((position) => {
          const newPosition = { ...position, x: position.x + 50 };
          console.log("arrowright nedtryckt", newPosition);
          return newPosition;
        });
      } else if (event.key === "Spacebar" || event.key === " ") {
        console.log("spacebar nedtryckt");
        setProjectiles((prevProjectiles) => [
          ...prevProjectiles,
          { x: position.x, y: position.y },
        ]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return (
    <div className="content-container">
      {projectiles.map((proj, index) => (
        <Projectiles
          key={index}
          initialPosition={{
            x: position.x,
            y: position.y,
          }}
        />
      ))}
      <div
        className="player"
        style={{
          left: `${position.x}px`,
          bottom: `${position.y}px`,
        }}
      ></div>
    </div>
  );
};

export default Player;
