const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Drink {
    _id: ID
    name: String
    description: String
    price: Float
    
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
  type Query {
    categories: [Category]
    products(name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  
  type Mutation {
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
