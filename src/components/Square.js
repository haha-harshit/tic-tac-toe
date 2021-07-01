import React from "react";

export const Square = ({ value, onClick, isWinningSquare }) => {
    console.log("square rerender");

    return (
        <button
            type="button"
            onClick={onClick}
            className={`square ${isWinningSquare ? "winning" : ""} ${
                value === "X" ? "text-green" : "text-orange"
            }`}
        >
            {value}
        </button>
    );
};
