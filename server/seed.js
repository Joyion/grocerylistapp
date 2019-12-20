const mongoose = require("mongoose");
const listSchema = require("./models/store.model");

const seedDb = function (){

listSchema.deleteMany(function(err){
    if(err){
        console.log(err);
    }
    else {
        listSchema.create(groceries, function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Database seeded");
            }
        })
    }
})

const groceries = [
    {
        name: "Beef",
        type: "Deli/Meat",
        img:"null",
        count: 0
    },
    {
        name: "Chicken",
        type: "Deli/Meat",
        img: "null",
        count: 0
    },
    {
        name: "Fish",
        type: "Deli/Meat",
        img: "null",
        count: 0
    },
    {
        name: "Milk",
        type: "Dairy",
        img: "null",
        count: 0
    },
    {
        name: "Yogurt",
        type: "Dairy",
        img: "null",
        count: 0,
    },
    {
        name: "Cheese",
        type: "Dairy",
        img: "null",
        count: 0
    },
    {
        name: "Pizzas",
        type: "Frozen",
        img: "null",
        count: 0
    },
    {
        name: "Frozen Dinners",
        type: "Frozen",
        img: "null",
        count: 0,
    },
    {
        name: "Ice Cream",
        type: "Frozen",
        img: "null",
        count: 0
    },
    {
        name: "Apples",
        type: "Fruit/Vegetable",
        img: "null",
        count: 0
    },
    {
        name: "Grapes",
        type: "Fruit/Vegetable",
        img: "null",
        count: 0
    },
    {
        name: "Bananas",
        type: "Fruit/Vegetable",
        img: "null",
        count: 0
    },
    {
        name: "Black Beans",
        type: "Canned Goods",
        img: "null",
        count: 0
    },
    {
        name: "Soup",
        type: "Canned Goods",
        img: "null",
        count: 0
    },
    {
        name: "Chili",
        type: "Canned Goods",
        img: "null",
        count: 0
    },
    {
        name: "Salt",
        type: "Spices/Condiments",
        img: "null",
        count: 0
    },
    {
        name: "Pepper",
        type: "Spices/Condiments",
        img: "null",
        count: 0
    },
    {
        name: "Sugar",
        type: "Spices/Condiments",
        img: "null",
        count: 0
    },
]

}

module.exports = seedDb;