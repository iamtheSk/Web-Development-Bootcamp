var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// 1) for each function

// const newnumbers = [];
// numbers.forEach(function (x) {
//   return newnumbers.push(x * 2);
// });

// console.log(newnumbers);

// 2) Map function same thing

const newNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers);
