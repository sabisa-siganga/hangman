import React from "react";
import "./alphabets.scss";
import { alphabets as alphabetList } from "../../utils/alphabets";

/**
 *
 * @param {object} param
 * @returns
 */
function Alphabets({ onTermSelect, validAlphabets, invalidAlphabets }) {
  /**
   * Accessing the alphabet on the button
   * @param {object} event
   * @returns
   */
  const onClick = (event) => {
    const { innerText } = event.target;

    /**
     * checking if the alphabet is included in the correct letters or incorrect letters
     */
    if (
      validAlphabets.includes(innerText.toLowerCase()) ||
      invalidAlphabets.includes(innerText.toLowerCase())
    ) {
      return;
    }

    // pass the selected letter
    onTermSelect(innerText);
  };

  return (
    <div className="alphabets pb-5">
      {/* iterating through the alphabets to display alphabet */}
      {alphabetList.map((alphabet, index) => {
        // Displaying the list of alphabets
        return (
          <button
            key={`alphabet-${index}`}
            className={`alphabet-btn ${
              validAlphabets.includes(alphabet) ? "valid" : ""
            } ${invalidAlphabets.includes(alphabet) ? "invalid" : ""}`}
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

export default Alphabets;
