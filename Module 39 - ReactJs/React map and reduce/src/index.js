import React from "react";
import ReactDOM from "react-dom";
import emoji from "./emojipedia";

// all methods in separate files components folder

// here below we done the challenege using substring

// The substring takes the string only cut through that

//  first to done that create a mapfunction from emojipedia file
// create a function inside map provide a name via that we take paricular data and substring
//The store the function new const then call in log or inside render

const newEmoji = emoji.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

ReactDOM.render(<h3>{newEmoji + ","}</h3>, document.getElementById("root"));

// This log data you can see in chrome dev console or vs code terminal not work on sandbox console
console.log(newEmoji);
