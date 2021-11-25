import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart-selector';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<CustomButton>checkout</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
