// mini project contact book 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const contacts = [];


// add contact 

function addContact(){
    rl.question("Enter contact name: ", function(name) {
        rl.question("Enter contact phone number: ", function(phone) {
            rl.question("Enter contact email: ", function(email) {
            
                contacts.push({
                    name: name,
                    phone: phone,
                    email: email,
                });

                console.log("\n Contact added successfully!\n");
                showMenu();
             });
            });
        });
    }


// search contact 

function searchContact(){
    rl.question("Enter the name to search: ", function(name){

        let contact = contacts.find(function(contact){
            return contact.name.toLowerCase() === name.toLowerCase();
        })

        if (contact){
            console.log("\nContact Found!");
            console.log("Name:", contact.name);
            console.log("Phone: ", contact.phone );
            console.log("Email: ", contact.email);
        }
        else{
            console.log("\n Contact not Found!");
        }

        console.log();
        showMenu();
    });
}


// remove contact 

function removeContact(){
    rl.question("Enter name to remove:", function(name){

        let index = contacts.findIndex(function(contact){
            return contact.name.toLowerCase() === name.toLowerCase();
        });

        if(index !== -1){
            contacts.splice(index ,1 );
            console.log("\n Contact removed successfully");
        }
        else{
            console.log("\n Contact not found.");
        }
        
        console.log();
        showMenu();

    });

}


// display all contacts

function displayContacts(){

    if (contacts.length === 0){
        console.log("\n No contacts found!");
        showMenu();
        return;
    }
    else{
        console.log("All Contacts----->");

        contacts.forEach(function(contact, index){
            console.log(`\n Contact ${index, 1}`);
            console.log("Name: ", contact.name);
            console.log("Phone: ", contact.phone);
            console.log("Email: ", contact.email);
        });

        console.log();
        showMenu();
    }
}


// Menu

function showMenu(){

    console.log("==== CONTACT BOOK ====");
    console.log("1. Add Contact");
    console.log("2. Search Contact");
    console.log("3. Remove Contact");
    console.log("4. Display Contacts");
    console.log("5. Exit");

    rl.question("Enter your choice:", function(choice){

        switch(choice){

            case "1":
                addContact();
                break;
            
            case "2":
                searchContact();
                break;

            case "3":
                removeContact();
                break;

            case "4":
                displayContacts();
                break;

            case "5":
                console.log("Exiting the contact book");
                rl.close();
                break;

            default:
                console.log("\n Invalid choice");
                showMenu();

        }
    });

}


// start program 
showMenu();