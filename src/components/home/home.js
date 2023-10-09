import React from "react";
import "./home.scss";
import { Container } from "react-bootstrap";

/**
 * Displaying the  button on the home page
 * @param {object} props
 * @returns
 */
function Home(props) {
  // destructuring props
  const { playGame } = props;

  return (
    <Container className="home-page my-4 p-5 text-center">
      {/* title */}
      <h2 className="mb-5">To play the game, please click the play button</h2>
      {/* play button */}
      <button onClick={playGame}>
        <span className="material-symbols-outlined py-1">play_circle</span>
      </button>
    </Container>
  );
}

export default Home;
