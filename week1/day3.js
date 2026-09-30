// arithimetic operators

let a = 10;
let b = 5;

console.log(a + b); //addition
console.log(a - b); //subtraction
console.log(a * b); //multiplication
console.log(a / b); //division      
console.log(a % b); //modulus


// comparison operators

console.log("a is greater than b: " + (a > b)); //greater than
console.log("a is less than b: " + (a < b));    //less than
console.log("a is equal to b: " + (a == b));    //equal to
console.log("a is not equal to b: " + (a != b)); //not equal to         


// logical operators

let x = true;
let y = false;

console.log("x AND y: " + (x && y)); //AND
console.log("x OR y: " + (x || y)); //OR
console.log("NOT x: " + (!x)); //NOT        


// grade calculator

let marks = 85;
let grade;

if (marks < 0 || marks > 100) {
  grade = "Invalid marks";
} else if (marks >= 90) {
  grade = "A+";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else if (marks >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Grade:", grade);


// even or odd number checker

let number = 7;

if (number % 2 === 0) {
  console.log(number + " is an even number.");
}
else {
  console.log(number + " is an odd number.");
}   


// age category classifier

let age = 25;

if (age < 0) {
  console.log("Invalid age");
}   
else if (age <= 12) {
    console.log("Child");
}
else if (age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}   

// switch statement 

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}


// ternary operator

let age1 = 18;
let eligibility = (age1 >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);