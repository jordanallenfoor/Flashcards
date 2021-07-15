import React from "react";
import Decks from "./Decks";
import CreateDeckBtn from "./CreateDeckBtn";

function Home({ currentDecks, setCurrentDecks }) {
  return (
    <>
      <CreateDeckBtn />
      <Decks setCurrentDecks={setCurrentDecks} currentDecks={currentDecks} />
    </>
  );
}

export default Home;
