// function declaration

function greet() {
    console.log("Hello, World!");
}   

greet();


// function expression

const greetExpression = function() {
    console.log("Hello, World!");
};

greetExpression();



// arrow function

const greetArrow = () => {
    console.log("Hello, World!");
};

greetArrow();



// parameter and return value

function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum);


// default parameters

function greetGuest(name = "Guest") {
    console.log(`Hello ${name}`);
}

greetGuest("Sikander");
greetGuest();



//scope 

function innerFunction() {
    let innerVariable = "I am from inner function";
    console.log(innerVariable);
}   

innerFunction();


let outerVariable = "I am from outer function";

function outerFunction() {
    console.log(outerVariable);
}   

outerFunction();



//palindrome 

function isPalindrome(str) {    
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 


//reverse string

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); 



//largest of 3 numbers

function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(largestOfThree(10, 25, 15));