// Fizzbuzzz problem 

for(let i =0; i<=100; i++ ){
     if (i % 3== 0 && i % 5== 0){
        console.log("FizzBuzz");
    }       
    else if (i % 3== 0){
        console.log("Fizz");
    }
    else if (i % 5== 0){
        console.log("Buzz");
    }     
    else{
        console.log(i);
    }
}


//cosole based calculator

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (input1) => {
    let num1 = Number(input1);

    rl.question("Enter operator (+, -, *, /): ", (operator) => {

        rl.question("Enter second number: ", (input2) => {
            let num2 = Number(input2);

            let result;

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;

                case "-":
                    result = num1 - num2;
                    break;

                case "*":
                    result = num1 * num2;
                    break;

                case "/":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Cannot divide by zero";
                    }
                    break;

                default:
                    result = "Invalid operator";
            }

            console.log(`Result: ${result}`);

            rl.close();
        });
    });
});