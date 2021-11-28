import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	DECREASE_CART_ITEM,
	TOGGLE_CART_HIDDEN
} from './cart-constants';
import {
	addItemToCart,
	decreaseCartItem,
	removeItemFromCart
} from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };

		case CART_ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};

		case DECREASE_CART_ITEM:
			return {
				...state,
				cartItems: decreaseCartItem(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;
