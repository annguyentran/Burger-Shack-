<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d
import ApolloClient, { ApolloLink, HttpLink } from 'apollo-boost';
import { onError } from 'apollo-link-error'
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import store from './utils/store';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Footer from "./components/Footer";
<<<<<<< HEAD
// import Careers from "./components/Careers";


=======
=======
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
>>>>>>> main


>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
});

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      },
      link: ApolloLink.from([errorLink, HttpLink])
    })
  },
  uri: '/graphql',
})

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
<<<<<<< HEAD
              {/* <Route exact path="/careers" component={Careers} /> */}
=======
>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
              <Footer />
            </Switch>
<<<<<<< HEAD
            <Footer/>
          </Provider>
        </div>
=======
          </Provider>
        </div>
=======
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
>>>>>>> main
>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d
      </Router>
    </ApolloProvider>

  );
  }

export default App;