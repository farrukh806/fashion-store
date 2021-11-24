import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import { selectCartItems } from '../../redux/cart/cart-selector';
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

const mapStateToProps = (state) => {
	return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
