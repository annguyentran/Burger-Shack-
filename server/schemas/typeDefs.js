const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  
  type Order {
    _id: ID
    customerName: String
    address: String
    total: Float
    status: Int
    method: Int
  }

  type Burger {
    title: String
    description: String
    img: String
    prices: Int
    extraOptions: 
  }

  // TODO: make this work

  
`;

module.exports = typeDefs;
