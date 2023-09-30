import { useEffect, useState } from "react";
import { AlienProps } from "../../../types";

import "./Alien.css";

const Alien: React.FC<AlienProps> = ({ initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //här sätter man det nuvarande värdet, alltså position i staten som refereras  till prevPosition och så skapar man ett objekt där alla egenskaper av prevPosition behålls ( detta händer genom ...prevPosition ), men jag ökar värdet av x med 5.
      setPosition((prevPosition) => ({
        ...prevPosition,
        // x: prevPosition.x + 5,
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
