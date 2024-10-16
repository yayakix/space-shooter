import React from "react";
import Bullet from "./Bullet";
import Alien from "./Alien";
import useGameLogic from "./GameLogic";

const Game = () => {
    const { playerPosition, bullets, aliens } = useGameLogic();

    return (
        <div className="bg-black h-screen flex justify-center items-center relative" tabIndex={0}>
            {aliens.map((alien) => (
                <Alien key={alien.id} {...alien} />
            ))}
            {bullets.map((bullet) => (
                <Bullet key={bullet.id} {...bullet} playerPosition={playerPosition} />
            ))}
            <div
                className={`bg-pink-400 h-10 w-10 absolute bottom-0`}
                style={{ transform: `translateX(${playerPosition}px)` }}
            ></div>
            <span>{playerPosition}</span>
        </div>
    );
};

export default Game;
