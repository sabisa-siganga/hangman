import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import GameRules from "./components/gameRules/gameRules";
import { randomTerm } from "./utils/alphabets";
import Alphabets from "./components/alphabets/alphabets";
import Hanger from "./components/hanger/hanger";
import { gameStatus } from "./utils/gameStatus";
import Home from "./components/home/home";
// randomly selecting the words on the array
let randomlySelectedTerm = randomTerm();

function App() {
  const [help, setHelp] = useState(false);
  const [canPlay, setCanPlay] = useState(true);
  const [invalidAlphabets, setInvalidAlphabets] = useState([]);
  const [validAlphabets, setValidAlphabets] = useState([]);
  const [startGame, setStartGame] = useState(false);

  /**
   * initializing the game to be playable
   */
  const playGame = () => {
    setStartGame(true);
  };

  /**
   * checking the alphabet if is valid or invalid
   */
  const alphabetChecker = useCallback(
    (alphabet) => {
      // checking if the user can still play the game
      if (!canPlay) return;

      // changing the term to lowercase
      const term = alphabet.toLowerCase();

      // checking if the alphabet is included in the randomly selected term
      const matchingWord = randomlySelectedTerm.includes(term);

      // storing alphabets
      let listOfAlphabets = [];

      // initializing the listOfLetterType variable
      let listOfLetterType = "";

      // checking if alphabet is included in the randomly selected term
      // if the alphabet is not included in the valid alphabets, then save it
      if (matchingWord && !validAlphabets.includes(term)) {
        listOfAlphabets = [...validAlphabets, term];
        listOfLetterType = "valid-alphabets";
      }

      // if alphabet is not included in the valid alphabets, then save it
      if (!matchingWord && !invalidAlphabets.includes(term)) {
        listOfAlphabets = [...invalidAlphabets, term];
        listOfLetterType = "invalid-alphabets";
      }

      return {
        listOfLetterType,
        listOfAlphabets,
      };
    },
    [validAlphabets, invalidAlphabets, canPlay]
  );

  /**
   * Handling the key up event
   * @param {*} event
   */
  const handleKeyUpFunc = useCallback(
    (event) => {
      const { key, keyCode } = event;

      // keycode is between 65 and 90 representing alphabets
      if (keyCode >= 65 && keyCode <= 90) {
        const results = alphabetChecker(key);

        // checking if the results are not undefined
        if (results) {
          if (results.listOfLetterType === "valid-alphabets") {
            setValidAlphabets(results.listOfAlphabets);
          } else if (results.listOfLetterType === "invalid-alphabets") {
            setInvalidAlphabets(results.listOfAlphabets);
          }
        }
      }
    },
    [alphabetChecker]
  );

  useEffect(() => {
    // adding an eventlistener to keyup
    window.addEventListener("keyup", handleKeyUpFunc);

    // on component unmount, remove the event listener
    return () => window.removeEventListener("keyup", handleKeyUpFunc);
  }, [handleKeyUpFunc]);

  /**
   * Pass the selected alphabet
   * @param {string} alphabet
   */
  const onTermSelect = (alphabet) => {
    const results = alphabetChecker(alphabet);

    // checking if the results are not undefined
    if (results) {
      if (results.listOfLetterType === "valid-alphabets") {
        setValidAlphabets(results.listOfAlphabets);
      } else if (results.listOfLetterType === "invalid-alphabets") {
        setInvalidAlphabets(results.listOfAlphabets);
      }
    }
  };

  /**
   *  displaying the rules of the game
   */
  const onHelp = () => {
    setHelp(true);
  };

  /**
   *  Hiding the rules of the game
   */
  const onClose = () => {
    setHelp(false);
  };

  /**
   * Restarting the game
   */
  function restartGame() {
    // resetting variables to empty arrays
    setValidAlphabets([]);
    setInvalidAlphabets([]);

    // resetting setCanPlay to true
    setCanPlay(true);

    // randomly reselecting the term
    randomlySelectedTerm = randomTerm();
  }

  /**
   * Creating an array
   * @returns { string[]}
   */
  const toArray = () => {
    return randomlySelectedTerm.split("");
  };

  /**
   * Update playability of the game
   * @param {boolean} value
   */
  const canStillPlay = (value) => {
    setCanPlay(value);
  };

  return (
    <>
      {/* checking if startGame is not true thus display the home page */}
      {!startGame && <Home playGame={playGame} />}
      {/* checking if startGame is true thus displaying the game page */}
      {startGame && (
        <div className="app pt-4">
          <header className="app-header">
            {/* title */}
            Hangman {/* help button */}
            <button className="help-btn" onClick={onHelp}>
              <span className="material-symbols-outlined">help</span>
            </button>
          </header>

          {/* iterating through the array of terms to display the term */}
          <div className="display-term">
            <ul>
              {toArray().map((char, index) => {
                return (
                  <li className="word-letter" key={`word-${index}`}>
                    {/* checking if the word is valid then display the character */}
                    {validAlphabets.includes(char) ? char : ""}
                  </li>
                );
              })}
            </ul>
          </div>

          <Hanger
            invalidGuesses={invalidAlphabets.length}
            successStatusCheck={gameStatus(
              validAlphabets,
              invalidAlphabets,
              randomlySelectedTerm
            )}
            canStillPlay={canStillPlay}
            randomlySelectedTerm={randomlySelectedTerm}
            restartGame={restartGame}
          />

          <Alphabets
            validAlphabets={validAlphabets}
            invalidAlphabets={invalidAlphabets}
            onTermSelect={onTermSelect}
          />

          {/* If help is true, then display the rules of the game */}
          {help && <GameRules onClose={onClose} />}
        </div>
      )}
    </>
  );
}

export default App;
