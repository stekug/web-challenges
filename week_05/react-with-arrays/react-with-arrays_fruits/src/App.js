import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: "1", name: "🍎 Apple", color: "red" },
    { id: "2", name: "🍌 Banana", color: "yellow" },
    { id: "3", name: "🍇 Grape", color: "purple" },
    { id: "4", name: "🍊 Orange", color: "orange" },
    { id: "5", name: "🍋 Lemon", color: "yellow" },
    { id: "6", name: "🥝 Kiwi", color: "green" },
    { id: "7", name: "🫐 Blueberry", color: "blue" },
    { id: "8", name: "🍓 Strawberry", color: "red" },
    { id: "9", name: "🍍 Pineapple", color: "brown" },
    { id: "10", name: "🍉 Watermelon", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
