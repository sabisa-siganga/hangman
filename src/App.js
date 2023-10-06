import { useState } from "react";
import "./App.scss";
import Help from "./components/help/help";

function App() {
  const [help, setHelp] = useState(false);

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

  return (
    <div className="app pt-4">
      <header className="app-header">
        Hangman{" "}
        <button className="help-btn" onClick={onHelp}>
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      {/* If help is true, then display the rules of the game */}
      {help && <Help onClose={onClose} />}
    </div>
  );
}

export default App;
