// let name = "John";

// let sentence = "My name is ";
// console.log(sentence + name);

// console.log("Hello, World!");

// fruit = prompt("What is your favorite fruit?");
// console.log("Your favorite fruit is " + fruit);

let food = parseInt(prompt("花費多少錢在食物上?"));
let tip = parseInt(prompt("小費幾趴?"))/100;
let tip_amount = food*(tip);
let total = food + tip_amount;
console.log("花費" + total + "元在食物上");
console.log("小費" + tip_amount + "元");
