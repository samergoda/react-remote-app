import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello from React Remote</h2>
      <p>test with samer</p>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}
