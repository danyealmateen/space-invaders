import { AlienProps } from "../../../types";
import "./Alien.css";

const Alien: React.FC<AlienProps> = ({ initialPosition }) => {
  return (
    <div
      className="alien"
      style={{ 
        left: `${initialPosition.x}px`, 
        top: `${initialPosition.y}px` }}
    ></div>
  );
};
export default Alien;
