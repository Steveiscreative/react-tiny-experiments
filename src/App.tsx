import { useState } from "react";

import "./App.css";
import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <Greeting greet="Hello" name="Steve" isLoggedIn={true} />
      <Counter />
    </>
  );
}

export default App;
