import "./help.scss";

/**
 * Displaying the rules of hangman game
 * @param {object} param
 * @returns
 */
function Help({ onClose }) {
  const onCloseBtn = () => {
    onClose();
  };

  return (
    <div className="help-container">
      <div className="rules pb-5 text-center">
        {/* close button */}
        <button className="close-button" onClick={onCloseBtn}>
          {" "}
          <span class="material-symbols-outlined">close</span>
        </button>

        {/* Rules */}
        <h2>Hangman Game Rules - Help Page</h2>
        <p>
          Welcome to Hangman! Hangman is a classic word-guessing game that can
          be enjoyed with friends and family.
          <br />
          Here are the rules to get you started:
        </p>

        <h6>Objective:</h6>
        <p>
          Guess the hidden word or phrase before the "hangman" figure is
          completed.
        </p>

        <h6>Setup:</h6>

        <p>1. One player thinks of a word or phrase and keeps it a secret.</p>
        <p>
          2. Draw a series of underscores on paper or a whiteboard, with each
          underscore representing a letter in the word or phrase.
        </p>

        <h6>Guessing Letters:</h6>
        <p>3. Players take turns guessing letters one at a time.</p>

        <p>
          -If the guessed letter is correct, it's filled into its respective
          position in the word or phrase.
        </p>
        <p>
          -If the guessed letter is incorrect, a body part of the "hangman" is
          drawn (head, body, arms, legs).
        </p>

        <h6>Maximum Guesses:</h6>
        <p>
          6. Typically, players set a limit of 6 incorrect guesses, but you can
          adjust this to your preference.
        </p>

        <h6>Winning the Game:</h6>
        <p>
          7. The guessing player wins if they guess all letters correctly before
          the "hangman" figure is completed.
        </p>

        <p>
          The player who thought of the word or phrase wins if the "hangman"
          figure is completed.
        </p>
        <h6>Ending the Game:</h6>
        <p>
          9. The game ends when the word is guessed correctly or the "hangman"
          figure is completed.
        </p>

        <p>Players can start a new round with a different word</p>

        <p>Enjoy the game of Hangman, have fun, and test your word skills!</p>
      </div>
    </div>
  );
}
export default Help;
