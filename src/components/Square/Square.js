import { memo } from "react";
import sass from "sass";
import "./Square.scss";
sass.compile("Square.scss");

const Square = memo(({ value, onClick, i }) => (
  <button className="board-square" onClick={() => onClick(i)}>
    {value}
  </button>
));

export default Square;
