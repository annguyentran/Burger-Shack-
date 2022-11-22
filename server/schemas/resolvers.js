const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
   // TODO: Add Query
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return {token, user};
  },

  login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if(!user) {
          throw new AuthenticationError('Incorrect Username/Password');
      }

      const correctPass = await user.isCorrectPassword(password);

      if(!correctPass) {
          throw new AuthenticationError('Incorrect Username/Password');
      }

      const token = signToken(user);
      return {token, user};

  },

  saveOrder: async (parent, args, context) => {
      if (context.user) {
       const updatedUser =  await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedOrder: args.input } },
          { new: true }
        );
    
      return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
  },



  removeOrder: async (parent, args, context) => {
      if(context.user) {
      const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedOrder: { orderId: args.orderId } } },
          { new: true }
      );

      return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
  }
  }
};

module.exports = resolvers;
