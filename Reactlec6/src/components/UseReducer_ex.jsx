import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    default:
      return state;
  }
};

const UseReducer_ex = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default UseReducer_ex;
