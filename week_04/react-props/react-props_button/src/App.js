import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="orange" text="Click me Hard!" disabled />
      <Button color="orange" text="Click me Hard!" />
    </div>
  );
}

function Button({ color, text, disabled }) {
  return (
    <>
      <button
        disabled={disabled ? disabled : null}
        style={{ backgroundColor: color, padding: "25px", fontSize: "2rem" }}
      >
        {text}
      </button>
    </>
  );
}
