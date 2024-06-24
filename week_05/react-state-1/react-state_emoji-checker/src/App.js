import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    console.log("click");
    setCode(code + event.target.textContent);
    console.log(code);
  }

  function resetClick() {
    setCode("");
    console.log("Code was reset!");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={resetClick}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
