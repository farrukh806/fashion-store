import {
	CART_ADD_ITEM,
	TOGGLE_CART_HIDDEN,
	CART_REMOVE_ITEM,
	DECREASE_CART_ITEM
} from './cart-constants';

export const toggleCartHidden = () => {
	return { type: TOGGLE_CART_HIDDEN };
};

export const addItemToCart = (item) => {
	return { type: CART_ADD_ITEM, payload: item };
};

export const removeItemFromCart = (item) => {
	return { type: CART_REMOVE_ITEM, payload: item };
};

export const decreaseCartItem = (item) => {
	return { type: DECREASE_CART_ITEM, payload: item };
};
