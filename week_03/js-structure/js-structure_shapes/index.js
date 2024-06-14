import { Circle } from "./components/Circle/circle.js";
import { Square } from "./components/Square/square.js";
import { Pentagon } from "./components/Pentagon/pentagon.js";

console.clear();

const root = document.getElementById("root");

root.append(Circle(), Square(), Pentagon());
