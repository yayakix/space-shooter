import { useState, useEffect } from "react";
import { Bullet, Alien } from "../types";

const useGameLogic = () => {
    const [playerPosition, setPlayerPosition] = useState(0);
    const [bullets, setBullets] = useState<Bullet[]>([]);
    const [aliens, setAliens] = useState<Alien[]>([]);

    const shootBullet = () => {
        const newBullet: Bullet = { id: bullets.length + 1, position: 0 };
        setBullets((prevBullets) => [...prevBullets, newBullet]);
    };

    const spawnAlien = () => {
        const newAlien: Alien = { id: aliens.length + 1, xposition: Math.random() * window.innerWidth, yposition: 0 };
        setAliens((prevAliens) => [...prevAliens, newAlien]);
    };

    const handlePress = (e: KeyboardEvent) => {
        const keyPressed = e.key;
        if (keyPressed === "ArrowLeft") {
            setPlayerPosition((prevPosition) => prevPosition - 5);
        }
        if (keyPressed === "ArrowRight") {
            setPlayerPosition((prevPosition) => prevPosition + 5);
        }
        if (keyPressed === "ArrowUp") {
            shootBullet();
            spawnAlien();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => handlePress(e);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const moveBullets = () => {
            setBullets((prevBullets) => {
                return prevBullets
                    .map((bullet) => ({ ...bullet, position: bullet.position - 5 }))
                    .filter((bullet) => bullet.position > -window.innerHeight);
            });
        };

        const moveAliens = () => {
            setAliens((prevAliens) => {
                return prevAliens.map((alien) => ({
                    ...alien,
                    yposition: alien.yposition + 1,
                }));
            });
        };

        const gameLoop = () => {
            moveBullets();
            moveAliens();
            requestAnimationFrame(gameLoop);
        };

        requestAnimationFrame(gameLoop);

        return () => {
            // Cleanup if necessary
        };
    }, []);

    return { playerPosition, bullets, aliens };
};

export default useGameLogic;
