import { useState } from "react";
import "./Card.css";

function Card({ question, answer, difficulty, image }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card card-${difficulty}`}
      onClick={() => setFlipped(!flipped)}
    >
      <p className="card-text">{flipped ? answer : question}</p>
      {image && <img className="card-image" src={image} alt="" />}
      <span className="card-hint">click to flip</span>
    </div>
  );
}

export default Card;
