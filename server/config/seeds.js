const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Chicken' },
    { name: 'Beef' },
    { name: 'Pork' },
    { name: 'Fish' },
    { name: 'Vegan' },
    { name: 'Drinks' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Italian Royal Crispy Chicken',
      description:
        'Crispy white meat breast fillet topped with marinara sauce and melty Mozzarella cheese on a toasted potato bun.',
      image: 'crispy-chicken.webp',
      category: categories[0]._id,
      price: 2.99,
      quantity: 200,
      calorie: 533
    },

    {
      name: 'Chicken Jr.',
      description:
        'Our Classic Chicken Jr. Sandwich is loaded with chopped lettuce, creamy mayonnaise, and served to you freshly',
      image: 'junior.webp',
      category: categories[0]._id,
      price: 2.99,
      quantity: 200,
      calorie: 451
    },
    
    {
      name: '9 pc Chicken Fries',
      description:
        'Breaded, crispy white meat chicken perfect for dipping in any of our delicious dipping sauces.',
      image: 'chicken-fries.webp',
      category: categories[0]._id,
      price: 1.99,
      quantity: 200,
      calorie: 252
    },

    {
      name: 'Bacon King',
      description:
        'Two 1/4 lb* flame-grilled beef patties with crispy bacon, melted American cheese, ketchup, and creamy mayonnaise on a toasted sesame seed bun.',
      image: 'bacon-king.jpg',
      category: categories[2]._id,
      price: 3.99,
      quantity: 200,
      calorie: 1202
    },

    {
      name: 'Rodeo Burger',
      description:
        'A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun.',
      image: 'Rodeo.webp',
      category: categories[1]._id,
      price: 2.99,
      quantity: 200,
      calorie: 339
    },

    {
      name: 'Bacon Double Cheeseburger',
      description:
        'Two flame-grilled patties–for a 1/4 lb* of beef–with crispy bacon, melted American cheese, crunchy pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
      image: 'bacon-cheese.webp',
      category: categories[2]._id,
      price: 3.99,
      quantity: 200,
      calorie: 539
    },

    {
      name: 'Whopper',
      description:
        'A ¼ lb* of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun.',
      image: 'whopper.webp',
      category: categories[1]._id,
      price: 1.99,
      quantity: 200,
      calorie: 669
    },

    {
      name: 'Big Fish',
      description:
        '100% White Alaskan Pollock with crispy panko breading, sweet tartar sauce, and crunchy pickles on a toasted brioche-style bun.',
      image: 'big-fish.webp',
      category: categories[3]._id,
      price: 1.99,
      quantity: 200,
      calorie: 560
    },
    {
      name: 'VEGAN BURGER',
      category: categories[4]._id,
      description:
        'The best vegan burger loaded with flavor and suitable for the grill or stovetop. Hearty and satisfying with a delicious texture.',
      image: 'vegan.jpg',
      price: 3.99,
      quantity: 200,
      calorie: 120
    }, 

    {
      name: 'Medium Coca-Cola',
      category: categories[5]._id,
      description:
        'Enjoy a variety of soft drinks that pair perfectly with your meal!.',
      image: 'coca.webp',
      price: 0.99,
      quantity: 1000,
      calorie: 350
    }, 

    {
      name: 'Medium Sprite',
      category: categories[5]._id,
      description:
        'Enjoy a variety of soft drinks that pair perfectly with your meal!.',
      image: 'sprite.webp',
      price: 0.99,
      quantity: 1200,
      calorie: 330
    }, 

    {
      name: 'Medium Dr Pepper',
      category: categories[5]._id,
      description:
        'Enjoy a variety of soft drinks that pair perfectly with your meal!.',
      image: 'pepper.webp',
      price: 0.99,
      quantity: 1200,
      calorie: 350
    }, 

    {
      name: 'Medium Fanta Orange',
      category: categories[5]._id,
      description:
        'Enjoy a variety of soft drinks that pair perfectly with your meal!.',
      image: 'fanta.webp',
      price: 0.99,
      quantity: 1300,
      calorie: 322
    }, 
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Lacey',
    lastName: 'Grindley',
    email: 'lacey133@gmail.com',
    password: 'password1',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Spencer',
    lastName: 'Roe',
    email: 'roeroeroe@aol.com',
    password: 'password123'
  });

  console.log('users seeded');

  process.exit();
});
