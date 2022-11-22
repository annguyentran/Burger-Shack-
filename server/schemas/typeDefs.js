const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    img: String
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    customerName: String
    address: String
    total: Float
    products: [Product]
  }

  type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]

  }

  type Checkout {
    session: ID
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String):[Product]
    product(_id: ID!): Product
    employee: Employee
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addOrder(customerFirstName: String!, customerLastName: String!, email: String!, address: String!, products:[ID]!):Order
    login(email: String!, password: String!): Order
  }
  
`
module.exports = typeDefs;
