/**
 * Displaying the game status accordingly
 * @param {array} validAlphabets
 * @param {array} invalidAlphabets
 * @param {string} term
 * @returns
 */
export const gameStatus = (validAlphabets, invalidAlphabets, term) => {
  // Validating whether the user has won or lost the game
  const gameWon = [...term].every((alphabet) => {
    return validAlphabets.includes(alphabet);
  });

  const gameLost = invalidAlphabets.length === 10;

  return gameLost ? "game-lost" : gameWon ? "game-won" : "";
};
