import {
    ADD_BURGER,
    REMOVE_BURGER
} from './actions';


export default function reducer(state = { cartItems: [] }, action) {
    switch (action.type) {
      case ADD_BURGER:
        const item = action.payload;
        const burger = state.cartItems.find((x) => x.burger === item.burger);
        if (burger) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.burger === burger.burger ? item : x
            ),
          };
        }
        return { cartItems: [...state.cartItems, item] };
  
      case REMOVE_BURGER:
        return {
          cartItems: state.cartItems.filter((x) => x.burger !== action.payload),
        };
      default:
        return state;
    }
  }
  
  export { cartReducer };
  


