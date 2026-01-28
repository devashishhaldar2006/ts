import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";

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
    </>
  );
}

export default App;
