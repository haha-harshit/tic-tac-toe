// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from "react";
import { Board } from "./components/Board";
import { calculateWinner } from "./helpers";

import "./componentStyle/root.scss";

function App() {
    const [history, setHistory] = useState([
        { board: Array(9).fill(null), isXNext: true },
    ]);

    const [currentMove, setCurrentMove] = useState(0);

    const current = history[currentMove];

    console.log("History", history);

    const winner = calculateWinner(current.board);

    console.log(winner);

    const message = winner
        ? `Winner is ${winner}`
        : `Next Player is ${current.isXNext ? "❌" : "⭕"}`;

    console.log("board rerender");

    // update state
    const handleSquareClick = (position) => {
        if (current.board[position] || winner) {
            return;
        }

        setHistory((prev) => {
            const last = prev[prev.length - 1];

            const newBoard = last.board.map((Square, pos) => {
                if (pos === position) {
                    return last.isXNext ? "❌" : "⭕";
                }
                return Square;
            });

            return prev.concat({ board: newBoard, isXNext: !last.isXNext });
        });

        setCurrentMove((prev) => prev + 1);

        // setIsXNext((prev) => !prev);
    };

    return (
        <>
            <div className="app">
                <header className="App-header">
                    <h2>Tic Tac Toe ✔</h2>
                </header>
                <em>{message}</em>
                <Board
                    board={current.board}
                    handleSquareClick={handleSquareClick}
                />
            </div>
        </>
    );
}

export default App;
