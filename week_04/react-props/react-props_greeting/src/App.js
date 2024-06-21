import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeter name="Stephan" />
    </div>
  );
}

function Greeter({ name }) {
  return (
    <>
      <h1>Hello {name === "Merle" ? "Coach" : name}</h1>
    </>
  );
}
