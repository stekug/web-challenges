import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <>
      <article>
        <h1>Hi World Again!</h1>
        <p>This is a P Tag</p>
      </article>
    </>
  );
}
