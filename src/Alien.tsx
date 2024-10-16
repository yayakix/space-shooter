import React from "react";

interface AlienProps {
    id: number;
    xposition: number;
    yposition: number;
}

const Alien: React.FC<AlienProps> = ({ id, xposition, yposition }) => (
    <div
        key={id}
        className="bg-green-400 absolute h-10 w-10"
        style={{
            transform: `translate(${xposition}px, ${yposition}px)`,
        }}
    />
);

export default Alien;
