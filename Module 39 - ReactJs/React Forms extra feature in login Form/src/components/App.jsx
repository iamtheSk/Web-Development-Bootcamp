import React, { useState } from "react";

function App() {
  // For the function change the button color when hover the mouse
  const [isHover, setHover] = useState(false);

  function isMouseHover() {
    setHover(true);
  }

  function isMouseout() {
    setHover(false);
  }

  const [name, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value); //event use for get the value(input data) form input
  }

  // This state and function for when button clicked state get the input from name and
  // set the nameState Value to this stateValue via this State value we pass the input value to h1
  // only when button clicked all the this get and send data happens
  const [headingText, setHeadingText] = useState("");

  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault(); //This is prevent the default feature of forms(Refreshing forms after sumbit)
  }

  // OnSumbit attribute is replica of onClick
  return (
    <div className="container">
      <h1> Hello {headingText}</h1>
      {/* <form onSubmit={handleClick}> */}
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isHover ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={isMouseHover}
        onMouseOut={isMouseout}
        value={name} //Controlled component
        // type="submit"
      >
        Submit
      </button>
      {/* </form> */}
    </div>
  );
}

export default App;
