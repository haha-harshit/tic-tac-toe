import React from "react";

export const Square = ({ value, onClick }) => {
    console.log("square rerender");

    return (
        <button type="button" className="square" onClick={onClick}>
            {value}
        </button>
    );
};
