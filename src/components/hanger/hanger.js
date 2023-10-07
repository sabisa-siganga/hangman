import React, { useEffect } from "react";
import "./hanger.scss";
import state1 from "../../images/state1.GIF";
import state2 from "../../images/state2.GIF";
import state3 from "../../images/state3.GIF";
import state4 from "../../images/state4.GIF";
import state5 from "../../images/state5.GIF";
import state6 from "../../images/state6.GIF";
import state7 from "../../images/state7.GIF";
import state8 from "../../images/state8.GIF";
import state9 from "../../images/state9.GIF";
import state10 from "../../images/state10.gif";
import state11 from "../../images/state11.GIF";
import { Button } from "react-bootstrap";

// hanger features
const pictures = [
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
  state7,
  state8,
  state9,
  state10,
  state11,
];

/**
 * Displaying the features of the hangman
 * @param {number} invalidGuesses - Number of invalid guesses
 * @returns {React.JSX.Element}
 */
function Hanger(props) {
  const {
    successStatusCheck,
    canStillPlay,
    invalidGuesses,
    restartGame,
    randomlySelectedTerm,
  } = props;

  /**
   * Checking if the game is still playable between game-won or game-lost
   */
  useEffect(() => {
    canStillPlay(
      successStatusCheck &&
        ["game-won", "game-lost"].includes(successStatusCheck)
        ? false
        : true
    );
  }, [canStillPlay, successStatusCheck]);

  return (
    <div className="game-container">
      <div className="hanger-container">
        {Array.from({ length: invalidGuesses + 1 }, (_, index) => (
          <img
            src={pictures[index]}
            alt={`state${index + 1}`}
            key={`state${index + 1}`}
          />
        ))}
      </div>

      {successStatusCheck !== "" && (
        <div className="game-status pt-5">
          {/* Checking if the user has won or not then display status message according to the status */}
          <div className={`victory-status ${successStatusCheck}`}>
            {successStatusCheck === "game-won" && (
              <>
                <h2>Good job</h2>
              </>
            )}
            {successStatusCheck === "game-lost" && (
              <>
                <h2>Game over</h2>
                <h3>Random term: {randomlySelectedTerm}</h3>
              </>
            )}
            <Button className="btn" onClick={restartGame}>
              <span class="material-symbols-outlined">restart_alt</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hanger;
