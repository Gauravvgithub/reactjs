import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5

  const addValue = () => {
    if (counter < 50) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      alert("50 is last!!");
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      alert("Negative value not allowed");
    }
  };
  const resetValue = () => {
    if (counter === 0) {
      alert("counter is empty");
    } else {
      alert("Sure!! To reset value");
      counter = 0;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Counter App | useState Hook</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value </button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;
