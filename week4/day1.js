// 1. CALLBACK FUNCTION

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Sikander", () => {
    console.log("Welcome!");
});



// 2. setTimeout()

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);



// 3. setInterval()

let runningTimer = setInterval(() => {
    console.log("Running...");
}, 1000);



// 4. COUNTDOWN TIMER
// Uses setInterval()


let count = 10;

let countdownTimer = setInterval(() => {

    console.log(count);
    count--;

   
    if (count < 0) {
        clearInterval(countdownTimer);

       
        clearInterval(runningTimer);

        console.log("Time's up!");
    }

}, 1000);