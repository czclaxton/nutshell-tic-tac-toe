import React from "react";
import Square from "../Square/Square";

const Board = ({ board, onClick }) => (
  <div className="board">
    {board.map((square, i) => (
      <Square key={i} i={i} value={square} onClick={onClick} />
    ))}
  </div>
);

export default Board;
