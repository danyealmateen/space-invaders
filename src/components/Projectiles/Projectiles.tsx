import "./Projectiles.css";
import { useState, useEffect } from "react";
import { ProjectileProps } from "../../../types";

const Projectiles: React.FC<ProjectileProps> = ({ initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y - 5,
      }));
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="projectiles"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Projectiles;
