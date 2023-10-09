import React from "react";
import "./home.scss";
import { Container } from "react-bootstrap";

function Home(props) {
  const { playGame } = props;

  return (
    <Container className="home-page my-4 p-5 text-center">
      <h2 className="mb-5">To play the game, please click the play button</h2>
      <button onClick={playGame}>
        <span className="material-symbols-outlined py-1">play_circle</span>
      </button>
    </Container>
  );
}

export default Home;
