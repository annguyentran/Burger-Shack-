const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
   // TODO: Add Query
  },

  Mutation: {
    // TODO: Add mutation
  }
};

module.exports = resolvers;
