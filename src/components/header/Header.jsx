import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import CartIcon from '../cart-icon/CartIcon';
import './Header.scss';
import CartDropdown from '../cart-dopdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/contact' className='option'>
					CONTACT
				</Link>

				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to='/signin' className='option'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
