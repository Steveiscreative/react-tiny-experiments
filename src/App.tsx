import "./App.css";
import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";
import TodoApp from "./Components/TodoApp";
import RandomUser from "./Components/RandomUser";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <header>
        <div>
          <button
            onClick={() => {
              setTheme("light");
            }}
          >
            Light
          </button>
          <button
            onClick={() => {
              setTheme("dark");
            }}
          >
            Dark
          </button>
        </div>
      </header>

      <Greeting greet="Hello" name="Steve" isLoggedIn={true} />

      <div className="section bg-gray-100">
        <h2 className="">Day 2</h2>
        <Counter />
      </div>
      <div className="section">
        <h2 className="">Day 3</h2>
        <TodoApp />
      </div>
      <div className="section bg-gray-100">
        <h2 className="">Day 4</h2>
        <RandomUser />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
