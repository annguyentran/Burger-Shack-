// a list of burger using .map() method
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import BurgerCard from "../BurgerCard";
import { UPDATE_BURGERS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from "../../utils/helpers";
import { QUERY_PRODUCTS } from "../../utils/queries";

const BurgerList = ({ burgerlist }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_BURGERS,
        products: data.products
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_BURGERS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);
  return (
    <div className="container">
      <h1 className="title">THE BEST BURGER YOU CAN GET</h1>
      <p className="description">
        Give your kitchen the night off. We're here for you with bomb burgers,  fries, and more 🍔🍟. Welcome to  Burger Shack, home of the Good Burger 😉.
      </p>
      <div className="wrapper">
        {burgerlist.map((burger) => (
          <BurgerCard key={burger._id} burger={burger} 
          />
        ))}
      </div>
    </div>
  );
};

export default BurgerList;
