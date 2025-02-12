import { useState } from 'react';

const Puzzle = ({ imageUrl, gridSize }) => {
    const [pieces, setPieces] = useState(generatePuzzlePieces(gridSize));

    function generatePuzzlePieces(gridSize) {
        const pieces = [];
        for (let i = 0; i < gridSize * gridSize; i++) {
            pieces.push(i);
        }
        return shuffleArray(pieces);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handlePieceClick(index) {
        // Implement swap logic here
    }

    return (
        <div className={`grid grid-cols-${gridSize} gap-1`}>
            {pieces.map((piece, index) => (
                <div
                    key={index}
                    className="relative aspect-w-1 aspect-h-1"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundPosition: `${(piece % gridSize) * 100}% ${Math.floor(piece / gridSize) * 100}%`,
                        backgroundSize: `${gridSize * 100}%`,
                    }}
                    onClick={() => handlePieceClick(index)}
                >
                    <div className="w-full h-full bg-transparent"></div>
                </div>
            ))}
        </div>
    );
};

export default Puzzle;
