// basic example

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Something went wrong!");
    }
});


    

// .then()

myPromise.then((result) => {
    console.log(result);
});


//.catch()

myPromise.catch((error) => {
    console.log(error);
});


//GET request using fetch()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


//practice

console.log("Fetching users...");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    })
    .then((users) => {
        console.log("Users received:");

        users.forEach((user) => {
            console.log(
                `Name: ${user.name}, Email: ${user.email}`
            );
        });
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });