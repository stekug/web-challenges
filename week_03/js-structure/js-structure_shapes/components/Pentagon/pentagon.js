import { getRandomColor } from "../../utils/randomColor.js";

export function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    const randomColor = getRandomColor();
    pentagon.style.backgroundColor = randomColor;
  });
  return pentagon;
}
