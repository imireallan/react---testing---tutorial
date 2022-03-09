import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p data-testid="cnt">{counter}</p>
      <button
        data-testid="btn"
        style={{ margin: "1rem" }}
        onClick={() => setCounter(counter + 1)}
      >
        increment
      </button>
      <hr />
      <input data-testid="input" type="text" />
    </div>
  );
};

export default Counter;
