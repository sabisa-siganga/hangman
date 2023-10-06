import React from "react";
import "./letters.scss";
import { alphabets } from "../../utilities/utilities";

/**
 *
 * @param {object} param
 * @returns
 */
function Letters({ onSelect, correctLetters, incorrectLetters }) {
  /**
   * Accessing the letter on the button
   * @param {object} event
   * @returns
   */
  const onClick = (event) => {
    const { innerText } = event.target;

    /**
     * checking if the alphabet is included in the correct letters or incorrect letters
     */
    if (
      correctLetters.includes(innerText.toLowerCase()) ||
      incorrectLetters.includes(innerText.toLowerCase())
    ) {
      return;
    }

    // onSelect pass the selected letter
    onSelect(innerText);
  };

  return (
    <div className="letters pb-5">
      {/* iterating through the alphabets to display alphabet */}
      {alphabets.map((alphabet, index) => {
        // Displaying the list of alphabets
        return (
          <button
            key={`alphabet-${index}`}
            className={`letter-btn ${
              correctLetters.includes(alphabet) ? "correct" : ""
            } ${incorrectLetters.includes(alphabet) ? "incorrect" : ""}`}
            onClick={onClick}
          >
            {/* converting the alphabet to capital letters */}
            {alphabet.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default Letters;
