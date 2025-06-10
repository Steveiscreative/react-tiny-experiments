import { useState } from "react";

import "./App.css";
import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <div>
        <h2 className="">Day 1</h2>
        <Greeting greet="Hello" name="Steve" isLoggedIn={true} />
      </div>
      <div>
        <h2 className="">Day 2</h2>
        <Counter />
      </div>
    </>
  );
}

export default App;
