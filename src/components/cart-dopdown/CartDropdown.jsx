import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton>checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;