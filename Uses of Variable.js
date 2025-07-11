//variabe = A container that store a value
//          behaves as if it were the value it contains

//1. declaration let x;
//2. assingment     x = 100;

let x = 100;
let y = 200;
console.log(x);
console.log(y);

let age = 25;
var age_ = age;
let gpa = 2.1;
let price = 34.598;
let name = "lucifer";
let name2 = "Elmira";
let full_name = name + " " + name2;

//now we will know the (typeof) of this variable
console.log(typeof age);
console.log(typeof gpa);
console.log(typeof price);
console.log(typeof name);
console.log(typeof full_name);

// ${variable name} its bit more interesting to assign a value//
// also use `` this to assing values otherwise it will not show//
console.log(`your name ${full_name} and ur location??`);
console.log(`your age ${age}`);
console.log(`whats ur gpa ${gpa} and the price of the table ${price} ??`);
console.log(`The gpa is isn't it too low ${gpa}`);

// lets learn some booleans
let online = true;
let online2 = true;
let lonewolf = true;
console.log(`lucifer will win ${online} and trust me he will!!`);
console.log(
  `lucifer is a lone wolf ${lonewolf} and he is a king of this place ${online} and he will roar`
);
