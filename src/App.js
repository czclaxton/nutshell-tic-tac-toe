import React, { useReducer, useCallback } from "react";
import classNames from "classnames";
import Board from "./components/Board/Board";
import Message from "./components/Message/Message";
import Announcement from "./components/Announcement/Announcement";
import { onSquareClickReducer, initialState } from "./utils";

const App = () => {
  // userReducer over useState because of the deeply nested state tree as well as being able to pass down the dispatch fn
  const [{ board, isXNext, winner, prevIdx }, dispatch] = useReducer(
    onSquareClickReducer,
    initialState
  );

  const onClick = useCallback(
    (index) => {
      dispatch({ type: "click", index });
    },
    [dispatch]
  );

  const onUndoClick = useCallback(() => {
    dispatch({ type: "undo", index: prevIdx });
  }, [prevIdx, dispatch]);

  const onStart = useCallback(() => {
    dispatch({ type: "start" });
  }, [dispatch]);

  return (
    <div className="board-container">
      <div className={classNames("game", { "game--winner": !!winner })}>
        <Board board={board} onClick={onClick} />
        <Message isStarted={board.some((s) => s)} isXNext={isXNext} />
        <button className="button button-undo" onClick={onUndoClick}>
          Undo
        </button>
        {!!winner && <Announcement winner={winner} onStart={onStart} />}
      </div>
    </div>
  );
};

export default App;
