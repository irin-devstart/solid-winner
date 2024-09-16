import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect Run!");
    document.title = `You clicked ${count}`;
  }, [count]);

  console.count("Component Render");

  //Component ini lebih dahulu dirender dari pada useEffect
  return (
    <div className="App">
      <h3>You clicked {count}</h3>
      <button onClick={() => setCount(count + 1)}>Clicked</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
