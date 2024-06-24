import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hey, Click me!</Button>
      <Button>Joooo you can also click me!</Button>
      <Button>Iam a Button</Button>
      <Button>Yes Sir! Iam Button But</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
