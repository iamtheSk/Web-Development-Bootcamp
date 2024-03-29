import { useState } from "react";
import React from "react";

function App() {
  const [handleEvent, setEvent] = useState("hello");
  const [ismouseover, setMouseover] = useState(false);

  // This function changes the value of h1 when button is clicked
  function handleClick() {
    setEvent("Hello you clicked the Mouse!");
  }

  // This function set the state value as true when hover the button
  function handleMouseover() {
    setMouseover(true);
  }

  // This function set the state value as False when hover the button
  function handleMouseOut() {
    setMouseover(false);
  }

  // By seting the false true value for state the ternary operator change the Button's BGC value

  return (
    <div className="container">
      <h1>{handleEvent}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismouseover ? "Black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
