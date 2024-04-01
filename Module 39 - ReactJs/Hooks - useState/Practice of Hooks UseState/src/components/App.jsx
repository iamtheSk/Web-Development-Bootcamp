import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  //setInterval(updateTime, 1000); // This provide Dynamic refreshing

  const [TIME, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false }); //This flase provide for AM text distrub the page

    return setTime(newTime); //This new time will send the tine to TIME var that shown as hq
  }

  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
