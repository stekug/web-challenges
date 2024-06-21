import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={3} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <>
      <h1>Calculator</h1>
      <h3>Value A: {valueA}</h3>
      <h3>Value B: {valueB}</h3>
      <h2>Sum: {sum}</h2>
    </>
  );
}
