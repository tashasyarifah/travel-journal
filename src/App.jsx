import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";
import "./App.css";
console.log(Data);

export default function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
