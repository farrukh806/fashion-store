import React from 'react';
import { connect } from 'react-redux';
import {
	removeItemFromCart,
	addItemToCart,
	decreaseCartItem
} from '../../redux/cart/cart-actions';

import './CheckoutItem.scss';
const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => decreaseItem(cartItem)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>$ {price} </span>
			<div className='remove-button' onClick={() => removeItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (item) => dispatch(removeItemFromCart(item)),
		addItem: (item) => dispatch(addItemToCart(item)),
		decreaseItem: (item) => dispatch(decreaseCartItem(item))
	};
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
