import "./App.css";
import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";
import TodoApp from "./Components/TodoApp";
import RandomUser from "./Components/RandomUser";
import { createContext, useContext, useState } from "react";
import ThemeToggle from "./Components/ThemeToggle";
import SiteHeader from "./Components/Header";
import useWindowSize from "./hooks/useWindowSize";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const win = useWindowSize();
  console.log(win.height);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SiteHeader />

      <Greeting greet="Hello" name="Steve" isLoggedIn={true} />
      {win.width < 600 && (
        <div className="mobile-warning">
          <p>Mobile view is not supported. Please use a larger screen.</p>
        </div>
      )}
      <Counter />

      <TodoApp />

      <RandomUser />
    </ThemeContext.Provider>
  );
}

export default App;
