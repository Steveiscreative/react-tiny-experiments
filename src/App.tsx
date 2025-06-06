import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Greeting greet="Hello" name="Steve" isLoggedIn={false} />
        <Greeting greet="Hi" name="Bob" isLoggedIn={true} />
        <Greeting greet="Hi" name="Aaron" isLoggedIn={false} />
      </div>
    </>
  );
}

export default App;
