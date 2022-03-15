import React from "react";

const Announcement = ({ winner, onStart }) => (
  <div className="announcement">
    {winner === "tie" ? (
      <div>Tie Game</div>
    ) : (
      <div>
        <div>Congratulations! The winner is: </div>
        <h1>{winner}</h1>
      </div>
    )}
    <button className="button" onClick={onStart}>
      Reset
    </button>
  </div>
);

export default Announcement;
