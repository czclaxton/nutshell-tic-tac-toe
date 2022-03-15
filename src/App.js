import React, { useReducer, useCallback } from "react";
import classNames from "classnames";
import Board from "./components/Board/Board";
import Message from "./components/Message/Message";
import Announcement from "./components/Announcement/Announcement";
import { onSquareClickReducer, initialState } from "./utils";

const App = () => {
  const [{ board, isXNext, winner }, dispatch] = useReducer(
    onSquareClickReducer,
    initialState
  );

  const onClick = useCallback(
    (index) => {
      dispatch({ type: "click", index });
    },
    [dispatch]
  );

  const onStart = useCallback(() => {
    dispatch({ type: "start" });
  }, [dispatch]);

  return (
    <div className="board-container">
      <div className={classNames("game", { "game--winner": !!winner })}>
        <Board board={board} onClick={onClick} />
        <Message isStarted={board.some((s) => s)} isXNext={isXNext} />
        {!!winner && <Announcement winner={winner} onStart={onStart} />}
      </div>
    </div>
  );
};

export default App;
