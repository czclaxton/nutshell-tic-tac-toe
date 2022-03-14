import "./Message.scss";
import sass from "sass";
sass.compile("Message.scss");

const Message = ({ isStarted, isXNext }) => (
  <div className="message">
    {isStarted ? (isXNext ? "X's turn" : "O's turn") : "Click to begin"}
  </div>
);

export default Message;
