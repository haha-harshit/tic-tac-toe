// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from "react";
import { Board } from "./components/Board";
import { calculateWinner } from "./helpers";

import "./componentStyle/root.scss";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(board);
    console.log(winner);
    const message = winner
        ? `Winner is ${winner}`
        : `Next Player is ${isXNext ? "❌" : "⭕"}`;

    console.log("board rerender");

    // update state
    const handleSquareClick = (position) => {
        if (board[position] || winner) {
            return;
        }

        setBoard((prev) => {
            return prev.map((Square, pos) => {
                if (pos === position) {
                    return isXNext ? "❌" : "⭕";
                }
                return Square;
            });
        });

        setIsXNext((prev) => !prev);
    };

    return (
        <>
            <div className="app">
                <header className="App-header">
                    <h2>Tic Tac Toe ✔</h2>
                </header>
                <em>{message}</em>
                <Board board={board} handleSquareClick={handleSquareClick} />
            </div>
        </>
    );
}

export default App;
