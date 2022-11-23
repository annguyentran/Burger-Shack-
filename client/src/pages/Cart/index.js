// TODO: this page render our cart with orderdetail,  and information such as cart total. and a checkout button to submit
// import styles from "../styles/Cart.module.css";

import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from '@apollo/react-hooks';
import { QUERY_CHECKOUT } from "../../utils/queries"
import { idbPromise } from "../../utils/helpers"
import ProductCard from "../../components/ProductCard/ProductCard";
import Auth from "../../utils/auth";
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";



const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
      })
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds }
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <ProductCard key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {
              Auth.loggedIn() ?
                <button onClick={submitCheckout}>
                  Checkout
              </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
          </span>
          You haven't added anything to your cart yet!
          </h3>
        )}
    </div>
  );
};

export default Cart;


// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const amount = cart.total;



//   return (
//     <div className="container">
//       <div className="left">
//         <table className="table">
//           <tbody>
//             <tr className="Title">
//               <th>Product</th>
//               <th>Name</th>
//               <th>Extras</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </tbody>
//           <tbody>
//             {cart.products.map((product) => (
//               <tr className="tr" key={product._id}>
//                 <td>
//                   <div className="imgContainer">
//                     <Image
//                       src={product.img}
//                       layout="fill"
//                       objectFit="cover"
//                       alt="burger"
//                     />
//                   </div>
//                 </td>
//                 <td>
//                   <span className="name">{product.title}</span>
//                 </td>
//                 <td>
//                   <span className="extrax">
//                     {product.extras.map((extra) => (
//                       <span key={extra._id}>{extra.text}, </span>
//                     ))}
//                   </span>
//                 </td>
//                 <td>
//                   <span className="price">${product.price}</span>
//                 </td>
//                 <td>
//                   <span className="quantity">{product.quantity}</span>
//                 </td>
//                 <td>
//                   <span className="total">
//                     ${product.price * product.quantity}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="right">
//         <div className="wrapper">
//           <h2 className="title">CART TOTAL</h2>
//           <div className="totalText">
//             <b className="totalTextTitle">Subtotal:</b>${cart.total}
//           </div>
//           <div className="totalText">
//             <b className="totalTextTitle">Discount:</b>$0.00
//           </div>
//           <div className="totalText">
//             <b className="totalTextTitle">Total:</b>${cart.total}
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;