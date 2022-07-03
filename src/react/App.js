import React, { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [mainCount, setMainCount] = useState(0);

  useEffect(()=>{
    window.api.receive("counter", (count) => {
      setMainCount(count)
    });
  },[])

  const handleClick = () => {
    window.api.send("counterReact", count)
    setCount(count + 1);
  }

  return (
    <div>
      <h1>React Count</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Tıkla</button>
      <br />
      <h1>Main Count: {mainCount}</h1>
    </div>
  );
}

export default App;
