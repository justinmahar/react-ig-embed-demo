import React from "react";
import "./App.css";
import { IGEmbed } from "react-ig-embed";

function App() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <IGEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />}
    </div>
  );
}

export default App;
