import React from "react";

interface BulletProps {
    id: number;
    position: number;
    playerPosition: number;
}

const Bullet: React.FC<BulletProps> = ({ id, position, playerPosition }) => (
    <div
        key={id}
        className="bg-green-400 absolute h-10 w-2 bottom-0"
        style={{
            transform: `translate(${playerPosition}px, ${position}px)`,
        }}
    >
        Bullet
    </div>
);

export default Bullet;
