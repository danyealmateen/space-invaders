import { useEffect, useState } from "react";
import { PlayerProps } from "../../../types.tsx";
import "./Player.css";

const Player: React.FC<PlayerProps> = ({ initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setPosition((position) => {
          const newPosition = { ...position, x: position.x - 5 };
          console.log("arrowleft nedtryckt", newPosition);
          return newPosition;
        });
      } else if (event.key === "ArrowRight") {
        setPosition((position) => {
          const newPosition = { ...position, x: position.x + 5 };
          console.log("arrowright nedtryckt", newPosition);
          return newPosition;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
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
