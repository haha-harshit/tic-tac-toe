// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from "react";
import { Board } from "./components/Board";
import { History } from "./components/History";
import { StatusMessage } from "./components/StatusMessage";
import { calculateWinner } from "./helpers";

import "./componentStyle/root.scss";

// variable for new game
const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

function App() {
    const [history, setHistory] = useState(NEW_GAME);

    const [currentMove, setCurrentMove] = useState(0);

    const current = history[currentMove];

    console.log("History", history);

    const { winner, winningSquares } = calculateWinner(current.board);

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
                    return last.isXNext ? "X" : "O";
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

    // new game function
    const onNewGame = () => {
        setHistory(NEW_GAME);
        setCurrentMove(0);
    };

    return (
        <>
            <div className="app">
                <header className="App-header">
                    <h2>
                        TIC <span className="text-green">TAC</span> TOE
                    </h2>
                </header>
                <StatusMessage winner={winner} current={current} />
                <Board
                    board={current.board}
                    handleSquareClick={handleSquareClick}
                    winningSquares={winningSquares}
                />

                <button
                    type="button"
                    onClick={onNewGame}
                    className={`btn-reset ${winner ? "active" : ""}`}
                >
                    Start New Game
                </button>
                <h4 style={{ fontWeight: "normal" }}>Current Game History</h4>
                <History
                    history={history}
                    moveTo={moveTo}
                    currentMove={currentMove}
                />
                <div className="bg-balls"></div>
            </div>
        </>
    );
}

export default App;
