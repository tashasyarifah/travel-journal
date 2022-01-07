import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Data from "./Data";
import "./App.css";


export default function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
        <Navbar />
        {cards}
        <Footer />
    </div>
  );
}
