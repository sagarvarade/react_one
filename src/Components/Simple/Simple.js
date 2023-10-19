import React from "react";
import { useState } from "react";
function Simple() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  /*useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);*/

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <header className="App-header">
        <p>Sagar Varade</p>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
        <nav></nav>
        <p>{count}</p>
      </header>
    </div>
  );
}
export default Simple