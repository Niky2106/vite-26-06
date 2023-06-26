import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Toggle from "./components/Toggle";
import Prize from "./components/Prize";
<<<<<<< HEAD
import ClickMe from "./components/ClickMe";
=======
import Dino from "./components/Dino";
>>>>>>> 4936dc3c6df5a6df73d18ef9e6be7ed8cb924b3c

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Toggle />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Dino />
      <Prize />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ClickMe />
    </>
  );
}

export default App;
