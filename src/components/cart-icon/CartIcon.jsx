import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/Shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selector';

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

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, matchDispatchToProps)(CartIcon);
