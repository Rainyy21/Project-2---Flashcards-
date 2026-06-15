import { useState } from "react";
import "./App.css";
import Card from "./app/card";
import deck from "./app/deck.json";

function App() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => {
      if (deck.length <= 1) return i;
      let n = Math.floor(Math.random() * deck.length);
      while (n === i) n = Math.floor(Math.random() * deck.length);
      return n;
    });
  const prev = () => setIndex((i) => (i - 1 + deck.length) % deck.length);

  const card = deck[index];

  return (
    <div className="App">
      <h1>Science Flash Card</h1>
      <p>Test your knowledge about Science base question </p>
      <p>Number of cards: {deck.length}</p>
      <Card key={index} question={card.question} answer={card.answer} difficulty={card.difficulty} />
      <button className="next-btn" onClick={prev}>
        Previous
      </button>
      <button className="next-btn" onClick={next}>
        Next
      </button>
    </div>
  );
}

export default App;
