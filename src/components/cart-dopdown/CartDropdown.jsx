import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ cart: { cartItems } }) => {
	return { cartItems };
};

export default connect(mapStateToProps)(CartDropdown);
