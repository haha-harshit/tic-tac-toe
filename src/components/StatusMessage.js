import React from "react";

export const StatusMessage = ({ winner, current }) => {
    const noMovesLeft = current.board.every((el) => el !== null);

    return (
        // const message = winner
        // ? `Winner is ${winner}`;
        // : `Next Player is ${current.isXNext ? "❌" : "⭕"}`;

        <>
            <div className="status-message">
                {winner && (
                    <>
                        Winner is{" "}
                        <span
                            className={
                                winner === "X" ? "text-green" : "text-orange"
                            }
                        >
                            {winner}
                        </span>
                    </>
                )}
                {!winner && !noMovesLeft && (
                    <>
                        Next Player is{" "}
                        <span
                            className={
                                current.isXNext ? "text-green" : "text-orange"
                            }
                        >
                            {current.isXNext ? "X" : "O"}{" "}
                        </span>
                    </>
                )}
                {!winner && noMovesLeft && (
                    <>
                        <span className="text-green">X</span> and{" "}
                        <span className="text-orange">O</span> tied
                    </>
                )}
            </div>
        </>
    );
};
