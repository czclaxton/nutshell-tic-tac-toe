export const getWinner = (board) => {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = possibilities.reduce((memo, [x, y, z]) => {
    if (board[x] && board[x] === board[y] && board[y] === board[z])
      memo = board[x];

    return memo;
  }, "");

  if (!winner && board.every((s) => s)) winner = "tie";

  return winner;
};

export const initialState = {
  board: Array(9).fill(null),
  isXNext: true,
  winner: "",
};

export const onSquareClickReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return initialState;
    case "click":
      const movesList = [...state.board];

      if (movesList[action.index] === null) {
        movesList[action.index] = state.isXNext ? "X" : "O";

        return {
          board: movesList,
          isXNext: !state.isXNext,
          winner: getWinner(movesList),
        };
      }

      return state;
    default:
      return state;
  }
};
