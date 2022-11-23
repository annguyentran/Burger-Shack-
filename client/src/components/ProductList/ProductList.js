// a list of burger using .map() method
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from "../ProductCard/ProductCard";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from "../../utils/helpers";
import { QUERY_PRODUCTS } from "../../utils/queries";
import footerImage from "../../assets/footer.jpg";

const ProductList = ({ productlist }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);
  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(product => product.category._id === currentCategory);
  }
  return (
    <div className="container">
      <h1 className="title">THE BEST BURGER YOU CAN GET</h1>
      <p className="description">
        Give your kitchen the night off. We're here for you with bomb burgers,  fries, and more 🍔🍟. Welcome to  Burger Shack, home of the Good Burger 😉.
      </p>
      {state.products.length ? (
        <div className="flex-row">
            {filterProducts().map(product => (
                <ProductCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      { loading ? 
       <img src= {footerImage}  alt="burgers and fries" />: null}
    </div>
  );
}

export default ProductList;
