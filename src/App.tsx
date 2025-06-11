import "./App.css";
import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";
import TodoApp from "./Components/TodoApp";
import RandomUser from "./Components/RandomUser";
import { createContext, useContext, useState } from "react";
import ThemeToggle from "./Components/ThemeToggle";
import SiteHeader from "./Components/Header";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SiteHeader />

      <Greeting greet="Hello" name="Steve" isLoggedIn={true} />
      <Counter />

      <TodoApp />

      <RandomUser />
    </ThemeContext.Provider>
  );
}

export default App;
