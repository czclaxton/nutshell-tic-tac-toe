import { memo } from "react";
import Square from "../Square/Square";
import "./Board.scss";
import sass from "sass";
sass.compile("Board.scss");

const Board = memo(({ board, onClick }) => (
  <div className="board">
    {board.map((square, i) => (
      <Square key={i} index={i} value={square} onClick={onClick} />
    ))}
  </div>
));

export default Board;
