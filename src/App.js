// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from "react";
import { Board } from "./components/Board";
import { History } from "./components/History";
import { StatusMessage } from "./components/StatusMessage";
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

    const moveTo = (move) => {
        setCurrentMove(move);
    };

    return (
        <>
            <div className="app">
                <header className="App-header">
                    <h2>Tic Tac Toe ✔</h2>
                </header>
                <StatusMessage winner={winner} current={current} />
                <Board
                    board={current.board}
                    handleSquareClick={handleSquareClick}
                />
                <History
                    history={history}
                    moveTo={moveTo}
                    currentMove={currentMove}
                />
            </div>
        </>
    );
}

export default App;
