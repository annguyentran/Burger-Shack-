const { AuthenticationError } = require("apollo-server-express");
const { Employee, Category, Order, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // TODO: Add Query
    categories: async () => {
      return await Category.find()
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }
      return await Product.find(params).populate('category');
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },

    order: async (parent, { customerFirstName, customerLastName, address }, context) => {
      if (context.user) {
        const allOrders = await Order.find()
        return allOrders
      }

    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }

  },

  Mutation: {
    // TODO: Add mutation

  

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }


    }
  }
}




module.exports = resolvers;
