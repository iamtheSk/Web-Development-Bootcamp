import React from "react";

var isDone = true;

// Both below  function to provide
// this function assign for strike when button clicked
function strike() {
  document.getElementById("root").style.textDecoration = "line-throgh";
  // isDone = true;
}

// this function assign for unstrike when button clicked

function unStrike() {
  document.getElementById("root").style.textDecoration = "null";
  // isDone = false;
}

function App() {
  return (
    <div>
      {/* Declarative Programming  - define in the line */}
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>

      {/*  Imperative Programming define 2 function call that as diff actions */}

      {/* <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button> */}
    </div>
  );
}

export default App;
