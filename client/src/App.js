import React, { useState } from "react";
//set apollo.router and client
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Product/index";
import Cart from "./pages/Cart/index";
// import Menu from "./pages/Menu/index";
import Login from "./pages/Admin/Login";
//import { StoreProvider } from './utils/GlobalState';


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

  const [currentPage, setCurrentPage] = useState('landingPage')

  // const renderPage = () => {
  //   if (currentPage === 'landingPage') {
  //     return <LandingPage/>;
  //   }
  //   if(currentPage === 'Dashboard') {
  //     return <Dashboard/>;
  // };

  const handlePageChange = (page) =>setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/menu" element={<Menu/>} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route render={() => <h1 className="wrong">Wrong page!</h1>} />

        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
  }

export default App;