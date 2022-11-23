// They image of the burger along with title, description, price  

import React from "react";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";


const ProductCard = ({ item }) => {
  const { image, title, _id, price } = item;

  // const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { cart } = state;

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: _id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  //     });
  //     idbPromise("cart", "put", {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...item, purchaseQuantity: 1 },
  //     });
  //     idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
  //   }
  // };
  return (
    <div className="card px-1 py-1">
    <Link to={`/products/${_id}`}>
      <img alt={title} src={`/images/${image}`} />
      <p>{title}</p>
    </Link>
    <div>
    
      <span>${price}</span>
    </div>
    {/* <button onClick={addToCart}>Add to cart</button> */}
  </div>
);
  //   <div className="container">
  //     <a href="/product/${_id}`" passHref>
  //       <img src={item.image} alt="item" width="300" height="300" />
  //     </a>
  //     <h1 className="title">{item.title}</h1>
  //     <span className="price">${item.price}</span>
  //     <p className="description">{item.description}</p>
  //   </div>
  // );
};

export default ProductCard;