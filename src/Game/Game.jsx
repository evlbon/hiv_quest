import React, {useState} from 'react';
import "./Game.css";
import InputMask from "react-input-mask";
import {gameLogin, getStatus} from "../api";
import Char from "./components/Char";
import Bubble from "./components/Bubble";
import Radio from "./components/Radio";
import Checklist from "./components/Checklist";

const Game = () => {
    const [right, setRight] = useState(false)

    return (
        <div className="Game">

            <div
                className="Game__Main"
                onClick={()=>{setRight(right=>!right)}}
            >
                <Char right={right}/>
                <Bubble right={right}/>
                <Checklist options={["fed", "dot", "qwe"]}/>
            </div>

        </div>

    )
};

export default Game;