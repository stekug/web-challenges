import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          onClick={incrementCounter}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={decrementCounter}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
