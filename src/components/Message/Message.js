import React from "react";

const Message = ({ isStarted, isXNext }) => (
  <div className="message">
    {isStarted
      ? isXNext
        ? "X's turn"
        : "O's turn"
      : "Click on a square to begin"}
  </div>
);

export default Message;
