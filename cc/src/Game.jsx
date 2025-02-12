import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import icon from './assets/Frame 1.png';
const Game = () => {
    const [tiles, setTiles] = useState([]);
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchImageAndCreateTiles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let interval;
        if (timerRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerRunning]);

    const fetchImageAndCreateTiles = async () => {
        try {
            const API_KEY = "48736591-95d95e35e262c273372fd0d6a";
            const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=landscape&image_type=photo&per_page=5`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response:", data);

            if (data.hits && data.hits.length > 0) {
                createPuzzle(data.hits[0].webformatURL);
            } else {
                console.error("No images found!");
            }
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    const createPuzzle = (imageUrl) => {
        const tileSize = 100;
        const newTiles = Array.from({ length: 9 }, (_, index) => {
            const x = (index % 3) * tileSize;
            const y = Math.floor(index / 3) * tileSize;
            return {
                id: index,
                img: imageUrl,
                position: `${-x}px ${-y}px`,
                empty: index === 8,
            };
        });

        setTiles(shuffle(newTiles));
        setMoves(0);
        setTime(0);
        setTimerRunning(true);
    };

    const shuffle = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleTileClick = (index) => {
        const emptyIndex = tiles.findIndex(tile => tile.empty);
        const isAdjacent = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3].includes(index);

        if (isAdjacent) {
            const newTiles = [...tiles];
            [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
            setTiles(newTiles);
            setMoves(prevMoves => prevMoves + 1);
            checkWin(newTiles);
        }
    };

    const checkWin = (currentTiles) => {
        const isSolved = currentTiles.every((tile, index) => tile.id === index);
        if (isSolved) {
            setTimerRunning(false);
            navigate("/win", { state: { moves, time } });
        }
    };

    const getBorderStyle = (index) => {
        const emptyIndex = tiles.findIndex(tile => tile.empty);
        const isMovable = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3].includes(index);
        return isMovable ? "2px solid white" : "1px solid #ccc";
    };

    return (
        <div className="game-container">
            <div id="top" className="text - center">
                < h1 id="heading" className="absolute left-[48%] top-[2%] text-[#20615B] text-[3rem] font-normal font-[Yesteryear]" >
                    Slide!
                </h1 >
                <img id="icon" src={icon} alt="Icon" className="absolute w-[80px] h-[60px] left-[40%] top-[2%]" />
            </div >
            <div className="absolute top-[23%] left-[40%] h-[48px] w-[257px] rounded-[8px] bg-white border border-solid border-white">
                <p className="absolute left-[34%] top-[15%] text-black font-[Ubuntu]"><b>Moves : {moves}</b></p>
            </div>
            <div className="absolute left-[38%] top-[30%]" style={{ width: "300px", height: "300px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
                {tiles.map((tile, index) => (
                    <div
                        key={tile.id}
                        className="tile"
                        onClick={() => handleTileClick(index)}
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundImage: `url(${tile.img})`,
                            backgroundSize: "300px 300px",
                            backgroundPosition: tile.position,
                            border: getBorderStyle(index),
                        }}
                    ></div>
                ))}
                <p className=" text-white font-[Ubuntu] absolute top-[120%] left-[38%]">Time : {time}s</p>
            </div>
        </div>
    );
};

export default Game;
