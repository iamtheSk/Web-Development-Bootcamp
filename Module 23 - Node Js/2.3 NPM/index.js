
//Auto Name Generator
// var generateName= require("sillyname");

import generateName from "sillyname";
var sillyname = generateName();

// when use the string interpolation(call the variable between the strings instead of use + symbol) use instead of
//double quotation use ` this backticks symbol this symbol is appear in keyboard in before 1 key
// console.log(`My name is ${sillyname}.`);


// Challenge insead of random name use superheros names
import superheroes from "superheroes";
var names = superheroes.random();

console.log(`Iam ${names}!`);

//cover on 26/06