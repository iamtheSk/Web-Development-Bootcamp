import React from "react";
import ReactDOM from "react-dom";

var numbers = [3, 59, 5, 2, 48, 59];

//Find - find the first item that matches from an array.
// It check the index in the array index which element greater than 10 that element will out as a value

// var newNumbers = numbers.find(function(num){
//   return num > 10
// })

// ReactDOM.render(<h1>{newNumbers}</h1>,document.getElementById('root'));

//FindIndex - find the index of the first item that matches.
// similar to find same thing happen in this findIndex function value
// but it return the index position instead of value > 13.22

var newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});

ReactDOM.render(<h1>{newNumbers}</h1>, document.getElementById("root"));
