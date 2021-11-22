export const addItemToCart = (existingCartItems, cartItemToAdd) => {
	const isCartItemExists = existingCartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id,
	);

	if (isCartItemExists) {
		return existingCartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...existingCartItems, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...existingCartItems, { ...cartItemToAdd, quantity: 1 }];
};
