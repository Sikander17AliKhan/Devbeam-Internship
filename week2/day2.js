// creating array, indexing and length 

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(fruits[0]);
console.log(fruits[2]);

console.log(fruits.length);


//push, pop, shift, unshift

fruits.push("fig");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("grape");
console.log(fruits);


//slice

let number = [10, 20, 30, 40, 50];
let result = number.slice(1, 4);

console.log(result);


//splice

let colors = ["red", "green", "blue", "yellow", "purple"];
colors.splice(2, 1);
console.log(colors);


//forEach

let animals = ["cat", "dog", "elephant", "giraffe"];
animals.forEach(function(animal) {
    console.log(animal);
});



//map

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(n) {
    return n * 2;
});
console.log(doubled);


//filter

let ages = [12, 17, 20, 25, 30];
let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);


//reduce

let sum = numbers.reduce(function(total, n) {
    return total + n;
}, 0);
console.log(sum);   




// pracrtice questions

let Numbers = [10, 20, 30, 40, 50];


// 1. Find the sum

let Sum = Numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log("Sum:", Sum);


// 2. Find the maximum number

let Max = Numbers[0];

Numbers.forEach(number => {
    if (number > Max) {
        Max = number;
    }
});

console.log("Maximum:", Max);


// 3. Filter out even numbers

let OddNumbers = Numbers.filter(number => number % 2 !== 0);

console.log("Odd numbers:", OddNumbers);


// 4. Double every value using map()

let Doubled = Numbers.map(number => number * 2);

console.log("Doubled:", Doubled);