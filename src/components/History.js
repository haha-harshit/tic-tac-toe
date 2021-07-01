import React from "react";

export const History = ({ history, moveTo, currentMove }) => {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {history.map((_, move) => {
                    return (
                        <li key={move}>
                            <button
                                className={`btn-move ${
                                    move === currentMove ? "active" : ""
                                }`}
                                type="button"
                                onClick={() => {
                                    moveTo(move);
                                }}
                            >
                                {move === 0
                                    ? "Start the game"
                                    : `GoTo move #${move}`}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
