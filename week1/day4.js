// for loop

console.log("for loop");

for(let i=0; i<=5; i++){
    console.log(i);
}


// while loop

console.log("while loop");

let j = 0;
while (j <=10) {
    console.log(j);
    j++;
}

// do while loop

console.log("do while loop");

let k = 0;
do {
    console.log(k);
    k++;
}
while (k <= 10);


//break statement

console.log("break statement");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }   
    console.log(i);
}


//continue statement

console.log("continue statement");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


//nested loops

console.log("nested loops");

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }
    console.log(pattern);
}


//multiplication table

console.log("multiplication table");

let number = 5;

console.log("Multiplication Table of " + number);

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


//sum of first n natural numbers


let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);


//star pattern

console.log("star pattern");

for (let i = 1; i <= 5; i++) {
    let pattern = "";   
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}


//number pattern

console.log("number pattern");


for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= 5; j++) {
        pattern = pattern + j + " ";
    }

    console.log(pattern);
}


//basic prime number checker

console.log("basic prime number checker");

let num = 17;
let isPrime = true;

if (num < 2) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {

    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is Not a Prime Number");
}