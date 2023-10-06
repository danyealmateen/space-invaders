import { useEffect, useState } from "react";
import { AlienProps } from "../../../types";

import "./Alien.css";

const Alien: React.FC<AlienProps> = ({ initialPosition }) => {
  console.log("Rendering Alien at:,", initialPosition);
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + 5,
        y: prevPosition.y + 5,
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="alien-container">
      <div
        className="alien"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </div>
  );
};
export default Alien;
