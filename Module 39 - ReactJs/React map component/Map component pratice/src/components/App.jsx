import React from "react";
import Entry from "./Dict";
import emojipedia from "../emojipedia.js";

// This gone tag single js obeject data from emeojipedia
function createCard(data) {
  return (
    <Entry
      key={data.id}
      emojis={data.emoji}
      name={data.name}
      description={data.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {
          // This gone loop through
          emojipedia.map(createCard)
        }
      </dl>
    </div>
  );
}

export default App;
