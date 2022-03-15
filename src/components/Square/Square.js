import React, { memo } from "react";

const Square = memo(({ value, onClick, i }) => (
  <button className="board-square" onClick={() => onClick(i)}>
    {value}
  </button>
));

export default Square;
