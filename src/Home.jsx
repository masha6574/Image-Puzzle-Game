import icon from './assets/Frame 1.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div id="top" className="text - center">
                < h1 id="heading" className="absolute left-[48%] top-[10%] text-[#20615B] text-[7rem] font-normal font-[Yesteryear] leading-[144px]" >
                    Slide!
                </h1 >
                <img id="icon" src={icon} alt="Icon" className="absolute w-[205.2px] h-[135px] left-[30%] top-[60px]" />
            </div >

            <div id="name-field" className="absolute top-[35%] left-[30%]">
                <p className="text-white font-[Ubuntu]">Enter your name :</p>
                <input id="input-name" className="h-[1.8rem] w-[30rem] rounded-[8px] bg-white font-[Ubuntu] placeholder-[#0C0404] placeholder-opacity-[0.8] font-bold p-[10px]" placeholder="Player Name" type="text" />
                <button id="start-button" className="absolute top-[140%] left-[35%] bg-[#20615B] text-white border-[#20615B] rounded-[8px] p-[5px] h-[2.5rem] w-[8rem] font-bold cursor-pointer">
                    <Link to="/game">Start game</Link>
                </button>
            </div>

            <div id="rules" className="font-[Ubuntu] text-white absolute top-[70%] left-[5%] text-[0.9rem]">
                <p>
                    <p id="rules-heading" className="font-bold text-[1.3rem]">Gameplay Rules</p><br />
                    <ol className="list-decimal pl-8">
                        <li>Sliding Moves:</li><br />
                        <ul className="list-disc pl-9">
                            <li>Only tiles that are adjacent (above, below, left, or right) to the empty space can move.</li><br />
                            <li>When you click or tap an adjacent tile, it slides into the empty space.</li><br />
                        </ul>
                        <li>Goal:</li><br />
                        <ul className="list-disc pl-9">
                            <li>Arrange the tiles so that they are in order, with the empty space at the bottom-right, in the least number of moves.</li>
                            <br />
                        </ul>

                        <li>Winning Condition:</li><br />
                        <ul className="list-disc pl-9">
                            <li>The puzzle is solved when all numbered tiles are arranged in order and the empty space is in its correct position.</li>
                        </ul>
                    </ol>
                </p>
            </div>
        </div>
    )
}

export default Home
