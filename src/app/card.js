import { useState } from "react";
import "./Card.css";

function Card({ question, answer, difficulty, image }) {
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = (e) => {
    e.preventDefault();
    const correct = guess.trim().toLowerCase() === answer.trim().toLowerCase();
    setStatus(correct ? "correct" : "wrong");
  };

  return (
    <div className="card-wrapper">
      <div
        className={`card card-${difficulty}`}
        onClick={() => setFlipped(!flipped)}
      >
        <p className="card-text">{flipped ? answer : question}</p>
        {image && <img className="card-image" src={image} alt="" />}
        <span className="card-hint">click to flip</span>
      </div>
      <form className="guess-form" onSubmit={submit}>
        <label className="guess-label" htmlFor="guess-input">
          Guess the answer
        </label>
        <div className="guess-row">
          <input
            id="guess-input"
            className={`guess-input guess-${status}`}
            type="text"
            placeholder="Type your answer..."
            value={guess}
            onChange={(e) => {
              setGuess(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
          />
          <button className="guess-btn" type="submit">
            Submit
          </button>
        </div>
        {status !== "idle" && (
          <p className={`guess-feedback feedback-${status}`}>
            {status === "correct" ? "Correct!" : "Not quite — try again"}
          </p>
        )}
      </form>
    </div>
  );
}

export default Card;
