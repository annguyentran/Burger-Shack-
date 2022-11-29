import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
// import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";

function ProductItem(item) {
<<<<<<< HEAD
  const { image, name, _id, price, calorie } = item;
=======
  const { image, name, _id, price, quantity, calorie } = item;
>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d

  // const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        
        <div>
        {calorie} {pluralize("cal", calorie)}
        </div>
        <span>${price}</span>
<<<<<<< HEAD
        
      </div>
=======
      </div>
      {/* <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div> */}
>>>>>>> 0e64fd5fe8cdbfd96b74b4491ceace30959eba5d
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
