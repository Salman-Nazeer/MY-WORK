import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState("");
  return (
    <div className="App">
      <h1>Snapshot Testing</h1>
      <button onClick={()=>setdata("Hello")}>Click Me</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
