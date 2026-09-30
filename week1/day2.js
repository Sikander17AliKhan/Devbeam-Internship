var a = 12;
console.log(a);

let name = "Sikander ali khan";
console.log(name);

const pi=3.14;
console.log(pi);

//data types in js

let age = 25; //number
let firstName = "Sikander"; //string
let isStudent = true; //boolean
let lastName = null; //null
let address; //undefined
console.log(age);
console.log(firstName);
console.log(isStudent);
console.log(lastName);
console.log(address);

// type coercion

console.log("The age is " + age); //string concatenation
console.log("5"-2); //number

// differece between == and ===

console.log(5 == "5"); //true
console.log(5 === "5"); //false

//template literals

let name1 = "Sikander";
let age1 = 19;
console.log(`My name is ${name1} and I am ${age1} years old.`);

//10 short practice questions

//1.Create a variable name containing your name and print it.
let Name = "Sikander";
console.log(Name);

//2.Create a variable age containing your age and print it.
let Age = 19;
console.log(Age);

//3.Create a variable city containing "Delhi". Print its type using typeof.
let city = "Delhi";
console.log(typeof city);

//4.Create a variable isStudent with true. Check its type.
let isStudent1 = true;
console.log(typeof isStudent1);

//5.check null
let value = null;
console.log(typeof value); 

//6.Build a sentence usind template literals using variables name and age.
let name2 = "Sikander";
let age2 = 19;
console.log(`My name is ${name2} and I am ${age2} years old.`);

//7.calculate and use template literals to print the result.
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

//8.check multiple data types using typeof operator.
let num3 = 42;
let str = "Hello";
let bool = false;
let obj = { name: "Sikander" };
let arr = [1, 2, 3];
console.log(typeof num3); //number
console.log(typeof str); //string
console.log(typeof bool); //boolean
console.log(typeof obj); //object
console.log(typeof arr); //object

//9.check the difference between == and === using examples.
console.log(10 == "10"); //true
console.log(10 === "10"); //false

//10.check the difference between null and undefined using examples.
let nullValue = null;
let undefinedValue;
console.log(nullValue); //null
console.log(undefinedValue); //undefined