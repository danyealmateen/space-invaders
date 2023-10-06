import { useEffect, useState } from "react";
import Player from "../Player/Player";
import Alien from "../Alien/Alien";
import Projectiles from "../Projectiles/Projectiles";

const GameBoard = () => {
  const initialAlienPosition = [
    { x: 10, y: 10, width: 30, height: 30 },
    { x: 20, y: 10, width: 30, height: 30 },
    { x: 30, y: 10, width: 30, height: 30 },
  ];

  const [projectiles, setProjectiles] = useState<any[]>([]);
  const [aliens, setAliens] = useState(initialAlienPosition);

  const isColliding = (rect1: any, rect2: any) => {
    const collision =
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y;

    if (collision) {
      console.log("Collision function returns true", rect1, rect2);
    }
    return collision;
  };

  useEffect(() => {
    projectiles.forEach((projectile, projectileIndex) => {
      console.log("Projectile before collision check:", projectileIndex);
      aliens.forEach((alien, alienIndex) => {
        console.log("Alien before collision check:", alienIndex);
        if (isColliding(projectile, alien)) {
          console.log("Collision detected between:", {
            projectileIndex,
            alienIndex,
          });
          setProjectiles((prev) =>
            prev.filter((_, index) => index !== projectileIndex)
          );
          setAliens((prev) => prev.filter((_, index) => index !== alienIndex));
        }
      });
    });
  }, [projectiles, aliens]);

  return (
    <div className="game-board">
      {aliens.map((alien, index) => (
        <Alien key={index} initialPosition={alien} />
      ))}
      <Player
        initialPosition={{ x: 50, y: 95 }}
        setProjectiles={setProjectiles}
      />
      {projectiles.map((proj, index) => (
        <Projectiles key={index} initialPosition={proj} />
      ))}
    </div>
  );
};

export default GameBoard;
