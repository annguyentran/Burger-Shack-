const db = require('../config/connection');
const {Product, Category, Employee} = require('../models');

const categoryData = require('./categorySeeds.json');

db.once('open', async () => {
    await Category.deleteMany();
    const categories = await Category.insertMany({categoryData});
    console.log('categories seeded')

    await Product.deleteMany();
     Product.insertMany([
        {
            title: 'Original Burger',
            description: 'Simple cheeseburger with a patty, lettce and tomamto',
            category: categories[0]._id,
            price: 5
        },
    
        {
            title: "Super Burger",
            description: "Double cheeseburger",
            category: categories[0]._id,
            price: 8
        },
    
        {
            title: "ultimeatum",
            description: "The ultimate triple cheeseburger ",
            category: categories[0]._id,
            price: 10
        },
    
        {
            title: " Small French Fries",
            description: "Small fresh french fries that go perfect with your burger",
            category: categories[1]._id,
            price: 3
        },
    
        {
            title: "Medium French Fries",
            description: "Medium fresh french fries that go perfect with your burger",
            category: categories[1]._id,
            price: 5
        },
    
        {
            title: "Large French Fries",
            description: "Large fresh french fries that go perfect with your burger",
            category: categories[1]._id,
            price: 7
        },
        {
            title: " Cola",
            description: "A medium-sized coke drink",
            category: categories[2]._id,
            price: 3
        },
    
        {
            title: "Orange Fanta",
            description: "A medium-sized fanta drink",
            category: categories[2]._id,
            price: 3
        },
    
        {
            title: "7-UP",
            description: "A medium-sized 7-up drink",
            category: categories[2]._id,
            price: 3
        },
    
    
    ]);;
    console.log('products seeded')

    await Employee.deleteMany();

    await Employee.create({
        firstName: 'Andrew',
        lastName: 'Nguyen-Tran',
        email: 'abc123@gmail.com',
        password: 'password12345',
    })

    process.exit();
});