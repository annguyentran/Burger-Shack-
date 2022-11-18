import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = storeContext;
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        product: [],
        cart: [],
        cartOpen: [],
        currentCategory: '',
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(storeContext);
};

export { StoreProvider, useStoreContext };