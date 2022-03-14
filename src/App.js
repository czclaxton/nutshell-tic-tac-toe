import { useState } from "react";
import { getWinner } from "./utils";
import classNames from "classnames";
import Board from "./components/Board/Board";
import Message from "./components/Message/Message";
import Announcement from "./components/Announcement/Announcement";
import "./App.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState("");

  const onClick = (i) => {
    const movesList = [...board];
    movesList[i] = isXNext ? "X" : "O";
    setBoard(movesList);
    setIsXNext(!isXNext);

    const winner = getWinner(movesList);

    winner && setWinner(winner);
  };

  const onStart = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <div className={classNames("Game", { "Game--winner": !!winner })}>
      <Board board={board} onClick={onClick} />
      <Message isStarted={board.some((s) => s)} isXNext={isXNext} />
      {!!winner && <Announcement winner={winner} onStart={onStart} />}
    </div>
  );
};

export default App;
