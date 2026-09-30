//1.getElementById()

let heading = document.getElementById("heading");
console.log("Heading element:", heading);
console.log("Heading text:", heading.textContent);


//2.querySelector()

let description = document.querySelector(".description");
console.log("First description:", description);
console.log("Description text:", description.textContent);


//3.querySelectorAll()

let descriptions = document.querySelectorAll(".description");
console.log("All descriptions:", descriptions);

descriptions.forEach(function(item){
    console.log("Description:", item.textContent);
});



//4.Reading attributes

let link = document.getElementById("myLink");
console.log("Link elements:", link);
console.log("Link text:", link.textContent);
console.log("Link URL:", link.getAttribute("href"));


//5. Selecting list items
let skills = document.querySelectorAll("#skills li");
console.log("Skills:", skills);

skills.forEach(function(skill){
    console.log("Skills:", skill.textContent);
});
