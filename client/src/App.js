import React from "react";
//set apollo.router and client
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
//pages
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Admin/Dashboard";
import Burger from "./pages/Burger/index";
import Cart from "./pages/Cart/index";
import Menu from "./pages/Menu/index";
import Login from "./pages/Admin/Login";

//import authorization
import auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//establish apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),

  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/burger" element={<Burger/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart />} />
        <Route render={() => <h1 className="wrong">Wrong page!</h1>} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;