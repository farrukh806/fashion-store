import { CART_ADD_ITEM, TOGGLE_CART_HIDDEN } from './cart-constants';

export const toggleCartHidden = () => {
	return { type: TOGGLE_CART_HIDDEN };
};

export const addItemToCart = (item) => {
	return { type: CART_ADD_ITEM, payload: item };
};
