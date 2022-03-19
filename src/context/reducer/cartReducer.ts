import Store from "../Store";
import { SET_TOTAL_PRICE, SET_CART_DATA } from "../actionType"

const initial_state = {
    cartData: [],
    totalPrice: null 
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case SET_CART_DATA:
            return {
                ...state,
                cartData: action.payload,
            };
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload,
            };
        default:
            return state;
    }
}

export const { Provider, useStore, useDispatch } = Store(
    initial_state,
    reducer,
);