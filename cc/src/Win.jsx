import { useLocation, useNavigate } from "react-router-dom";
import icon from "./assets/Frame 1.png";
const Win = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get the moves and time from the state (handle undefined case)
    const { moves = 0, time = 0 } = location.state || {};

    return (
        <div>
            <div id="top" className="text - center">
                < h1 id="heading" className="absolute left-[48%] top-[2%] text-[#20615B] text-[3rem] font-normal font-[Yesteryear]" >
                    Slide!
                </h1 >
                <img id="icon" src={icon} alt="Icon" className="absolute w-[80px] h-[60px] left-[40%] top-[2%]" />
            </div >
            <div className="absolute top-[30%] left-[25%] text-2xl text-white font-[Ubuntu]">
                <h2 className="absolute top-[10%] left-[35%]">🎉 Congratulations! 🎉</h2><br /><br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You solved the puzzle in <strong>{moves}</strong> moves and <strong>{time}</strong> seconds!</p>
                <br /><button className="absolute left-[45%] cursor-pointer underline" onClick={() => navigate("/")}>Play Again</button>
            </div>
        </div >
    );
};

export default Win;
