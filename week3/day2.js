// Selecting elements
const title = document.getElementById("title");
const message = document.getElementById("message");
const styleBtn = document.getElementById("styleBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const list = document.getElementById("list");

let itemNumber = 1;


// 1. Changing text content
title.textContent = "DOM Manipulation Practice";


// 2. Changing HTML content
message.innerHTML = "<strong>Learn DOM using JavaScript!</strong>";


// 3. Changing inline styles
styleBtn.addEventListener("click", function () {

    title.style.color = "purple";
    title.style.fontSize = "35px";
    message.style.color = "green";
    console.log("Style changed");

});


// 4. Creating and appending new elements
addBtn.addEventListener("click", function () {

    const newItem = document.createElement("li");

    newItem.textContent = "New Item " + itemNumber;

    // Adding CSS class
    newItem.classList.add("highlight");

    // Adding item to the list
    list.appendChild(newItem);

    itemNumber++;

    console.log("New Item Added");
});


// 5. Removing existing elements
removeBtn.addEventListener("click", function () {

    if (list.lastElementChild) {
        list.lastElementChild.remove();
        itemNumber--;
    }

    console.log("Item Deleted");

});


// 6. Toggle CSS class
title.addEventListener("click", function () {

    title.classList.toggle("highlight");

});