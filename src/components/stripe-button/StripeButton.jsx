import React, { useState } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { clearAllItemsFromCart } from '../../redux/cart/cart-actions';

const StripeButton = ({ price, clearAllItems }) => {
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51J0II4SDIhtguh5I11gk5dMBTalOkMummJZSYKo3zbNCGGgMFeXQZQ1eSVQ0I3xi0FMbUuy8xvg6zjgj1BJGMvbI00ywecl8Mr';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
		setPaymentSuccess(true);
		clearAllItems();
	};

	return (
		!paymentSuccess && (
			<StripeCheckout
				label='Pay Now'
				name='Fashion Store'
				billingAddress
				shippingAddress
				image='https://m.media-amazon.com/images/I/71jWDseLEgL._SL1500_.jpg'
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel='Pay Now'
				token={onToken}
				stripeKey={publishableKey}
			/>
		)
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		clearAllItems: () => dispatch(clearAllItemsFromCart())
	};
};
export default connect(null, mapDispatchToProps)(StripeButton);
