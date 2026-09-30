// Select HTML elements

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// Add task when button is clicked

addBtn.addEventListener("click", addTask);


// Add task when Enter key is pressed

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Function to add a task

function addTask() {

    const taskText = taskInput.value.trim();


    // Check if input is empty

    if (taskText === "") {

        alert("Please enter a task!");

        return;
    }


    // Create list item

    const li = document.createElement("li");

    li.classList.add("task-item");


    // Create task text

    const span = document.createElement("span");

    span.textContent = taskText;

    span.classList.add("task-text");

    console.log("New Task Added")


    // Create Complete button

    const completeBtn = document.createElement("button");

    completeBtn.textContent = "Complete";

    completeBtn.classList.add("complete-btn");


    // Complete / Undo functionality

    completeBtn.addEventListener("click", function () {

        span.classList.toggle("completed");

        console.log("Task completed")


        if (span.classList.contains("completed")) {

            completeBtn.textContent = "Undo";        
            

        } else {

            completeBtn.textContent = "Complete";

        }
        

    });


    // Create Delete button

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // Delete functionality

    deleteBtn.addEventListener("click", function () {

        li.remove();

        console.log("Task Deleted")

    });


    // Add elements to list item

    li.appendChild(span);

    li.appendChild(completeBtn);

    li.appendChild(deleteBtn);


    // Add list item to task list

    taskList.appendChild(li);


    // Clear input

    taskInput.value = "";

    taskInput.focus();

}