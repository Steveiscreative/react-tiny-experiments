import { useReducer } from "react";
type State = { count: number };
type Action = { type: "increment" | "decrement" | "reset" };

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: Math.max(0, state.count - 1),
      };
    case "reset":
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
              if (state.count > 0) {
                dispatch({ type: "decrement" });
              }
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
              if (state.count > 0 && window.confirm("Are you sure?")) {
                dispatch({ type: "reset" });
              }
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
