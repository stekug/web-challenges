import { Header } from "./components/Header/header.js";
import { Form } from "./components/Form/form.js";
import { CardList } from "./components/CardList/cardList.js";
import { Card } from "./components/Card/card.js";

// const cards = cardStorage();

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
