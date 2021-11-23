import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/Shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const matchDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => {
	return {
		itemCount: cartItems.reduce(
			(accumulatedValue, cartItem) =>
				accumulatedValue + cartItem.quantity,
			0
		)
	};
};

export default connect(mapStateToProps, matchDispatchToProps)(CartIcon);
