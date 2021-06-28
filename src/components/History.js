import React from "react";

export const History = ({ history, moveTo, currentMove }) => {
    return (
        <ul>
            {history.map((_, move) => {
                return (
                    <li key={move}>
                        <button
                            style={{
                                fontWeight:
                                    move === currentMove ? "bold" : "normal",
                            }}
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
    );
};
