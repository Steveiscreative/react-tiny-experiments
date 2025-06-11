import { useState } from "react";
/**
 * Counter with useState
      Concepts: useState, event handling
      What to do:
	- Build a <Counter> component that displays a number initialized at 0.
	- Add “+” and “–” buttons that increment and decrement the count state using React’s useState hook.
	- Disable the “–” button when the count is 0 (to prevent negative numbers).
	- Add a “Reset” button that sets the count back to 0.
	- Goal: Cement how to create and update local component state and handle simple events.
 */
export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    if (count === 0) return;

    setCount((count) => count - 1);
  }

  function reset() {
    if (window.confirm("Are you sure?")) {
      setCount(0);
    }
  }

  return (
    <div className="Counter">
      <h2 className="Counter-count">{count}</h2>
      <div className="Counter-buttons">
        <button
          type="button"
          onClick={decrement}
          disabled={count === 0}
          aria-label="Decrease count by one"
        >
          -
        </button>
        <button
          type="button"
          onClick={increment}
          aria-label="Increase count by one"
        >
          +
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
