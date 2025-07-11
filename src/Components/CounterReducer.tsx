import { useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      count: state.count > 0 ? state.count - 1 : state.count,
    };
  } else if (action.type === "reset") {
    return {
      ...state,
      count: 0,
    };
  }
  throw Error("Unknown action " + action.type);
}

export default function CounterR() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className={`section section-`}>
      <h2>Day 2</h2>
      <div className="Counter">
        <h2 className="Counter-count">{state.count}</h2>
        <div className="Counter-buttons">
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
            disabled={state.count === 0}
            aria-label="Decrease count by one"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "increment" });
            }}
            aria-label="Increase count by one"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
