import {
    ADD_BURGER,
    RESET_CART,
} from './actions';
import createId from './createId';

const initalState = {
    // cars: [
    //   {
    //     id: 1,
    //     make: 'Honda',
    //     model: 'Civic',
    //     year: '2008',
    //     isRunning: false,
    //   },
    //   {
    //     id: 2,
    //     make: 'Tesla',
    //     model: 'Y',
    //     year: '2021',
    //     isRunning: false,
    //   },
    // ],
    cart: {
        products: [],
        quantity: 0,
        total: 0,
    }
};

// Here we pass a default value of initalState if none is provided
export default function reducer(state = initalState, action) {
    switch (action.type) {
        case ADD_BURGER: {
        
            // TODO: push burger to cart array, update quantity, and update total by mutipliyng quantity and price
            
        }
        case RESET_CART: {
            // TODO: reset cart to initial state 
        }
        default: {
            return state;
        }
    }
}


