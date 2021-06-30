import React from "react";

export const StatusMessage = ({ winner, current }) => {
    const noMovesLeft = current.board.every((el) => el != null);

    return (
        // const message = winner
        // ? `Winner is ${winner}`;
        // : `Next Player is ${current.isXNext ? "❌" : "⭕"}`;

        <>
            <em>
                {winner && `Winner is ${winner}`}
                {!winner &&
                    !noMovesLeft &&
                    `Next Player is ${current.isXNext ? "❌" : "⭕"}`}
                {!winner && noMovesLeft && "Match Drawed"}
            </em>
        </>
    );
};
