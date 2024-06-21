import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hey World</h2>
      <label htmlFor="firstInput">Some Info</label>
      <input name="firstInput" id="firstInput"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        Artikel zum Thema React
      </a>
    </article>
  );
}
