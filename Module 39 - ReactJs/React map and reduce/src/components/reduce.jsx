import React from "react";
import ReactDOM from "react-dom";

var numbers = [3, 56, 2, 48, 5];

//Reduce - Accumulate a value by doing something to each item in an array.

// 1 In for each reduce method

// var newNumbers = 0;
// numbers.forEach(function(num){
//   return newNumbers += num;
// })

// 2 In Reduce method add the array
// The accumulator is equvilant to empty variable  , and currentNumber is like x in parameter

var newNumbers = numbers.reduce(function (Accumulate, currentNumber) {
  return Accumulate + currentNumber;
});

ReactDOM.render(<h1>{newNumbers}</h1>, document.getElementById("root"));
