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
