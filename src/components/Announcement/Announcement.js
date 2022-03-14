import "./Announcement.scss";
import sass from "sass";
sass.compile("Announcement.scss");

const Announcement = ({ winner, onStart }) => (
  <div className="announcement">
    {winner === "tie" ? (
      <div>Tie Game</div>
    ) : (
      <div>
        <div>Congratulations,</div>
        <h1>{winner}</h1>
      </div>
    )}
    <button className="button" onClick={onStart}></button>
  </div>
);

export default Announcement;
