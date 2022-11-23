import gql from "graphql-tag";

// mutation for logged in user
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// mutation to add burger
export const ADD_TO_CART = gql`
mutation addProduct($products: [ID]!) {
  addProduct(products: $products) {
    products {
      _id
    name
    description
    price
    quantity
    category {
      name
    } 
    }
  }
}
`;


// mutation to remove burger
export const REMOVE_FROM_CART = gql`
  mutation removeProduct($products: [ID]!)  {
    addProduct(products: $products){
      products {
        _id
      name
      description
      price
      quantity
      category {
        name
      } 
      }
    }
  }
  `;