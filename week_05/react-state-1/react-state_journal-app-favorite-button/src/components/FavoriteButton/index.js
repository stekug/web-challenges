import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;

  const [isFavorite, setIsFavorite] = useState(false);

  function changeFavoriteState() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={changeFavoriteState}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
