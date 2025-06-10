import "./App.css";
import Counter from "./Counter";
import Greeting from "./Greeting";
import TodoApp from "./TodoApp";
import RandomUser from "./Components/RandomUser";

function App() {
  return (
    <>
      <div className="section">
        <h2 className="">Day 1</h2>
        <Greeting greet="Hello" name="Steve" isLoggedIn={true} />
      </div>
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
    </>
  );
}

export default App;
