import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { ChaiList } from "./components/ChaiList";
import { Counter } from "./components/Counter";
import type {Chai} from "./types";


const menu: Chai[] = [
  {
    id: 1,
    name: "masala",
    price: 100,
  },
  {
    id: 2,
    name: "chai",
    price: 200,
  },
];
function App() {
  return (
    <>
      <div>
        <h1>deva</h1>
        <ChaiCard name="headphones" price={500} />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
    </>
  );
}

export default App;
