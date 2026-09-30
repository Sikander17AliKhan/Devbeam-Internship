// object literal

let student = {
    name: "sikander",
    age:20,
    marks:90,
    course:"BCA",
    college:"Jamia Hamdard"
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.course);


// methods 

let student1 = {
    name: "sikander",
    age:20,
    marks:70,
    course:"BCA",

    greet: function(){
        console.log("Hello, " + this.name);
    }
}

student1.greet();



// dot notation

console.log(student1.name);


// bracket notation

console.log(student1["age"]);


// nested object

let student2 = {
    name: "sikander",
    age:20, 
    marks:90,
    course:"BCA",
    college:"Jamia Hamdard",

    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    }
}

console.log(student2.address.city);
console.log(student2.address.country);
console.log(student2.name);
console.log(student2.age);


// this inside the object method

let student3 = {
    name: "sikander",
    age:20, 
    marks:90,
    course:"BCA",
    college:"Jamia Hamdard",

    getInfo: function(){
       return this.name + " is a student of " + this.course ;
    }
}

console.log(student3.getInfo());



// practice book model 

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",

    Summary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}. It is a ${this.genre} novel.`;
    }
}


console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.Summary());
