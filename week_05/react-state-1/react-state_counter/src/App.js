import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(num) {
    setCount(count + num);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick(-1);
            console.log("-");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick(1);
            console.log("+");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
