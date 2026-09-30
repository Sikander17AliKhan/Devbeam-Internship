// array of object 

const products = [
    {
        name: "Laptop",
        price: 55000,
        stock: 5
    },
    {
        name: "Mobile",
        price: 25000,
        stock: 10
    },
    {
        name: "Keyboard",
        price: 1500,
        stock: 20
    },
    {
        name: "Mouse",
        price: 800,
        stock: 15
    },
    {
        name: "Monitor",
        price: 12000,
        stock: 7
    },
    {
        name: "Headphones",
        price: 2000,
        stock: 12
    }
];


// looping through the array of objects

for(let product of products){
    console.log("Product Name: " + product.name);
    console.log("Product Price: " + product.price);
    console.log("Product Stock: " + product.stock);
    console.log("------------------------");
}


// find product by name

function findProductByName(name){   
    for(let product of products){
         if (product.name.toLowerCase() === name.toLowerCase()){
            return product;
        }
    }
    
    return "Product not found";
   
}

console.log(findProductByName("Mobile"));



// calculate the total inventory value

function calculateTotalInventoryValue(){
    let totalValue = 0;

    for (let product of products){
        totalValue += product.price * product.stock;
    }
    return totalValue;
}

console.log("Total Inventory Value: " + calculateTotalInventoryValue());