export interface PlayerProps {
  initialPosition: {
    x: number;
    y: number;
  };
  setProjectiles: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface AlienProps {
  initialPosition: {
    x: number;
    y: number;
  };
}

export interface ProjectileProps {
  initialPosition: {
    x: number;
    y: number;
  };
}
