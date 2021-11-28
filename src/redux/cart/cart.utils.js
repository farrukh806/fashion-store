export const addItemToCart = (existingCartItems, cartItemToAdd) => {
	const isCartItemExists = existingCartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (isCartItemExists) {
		return existingCartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...existingCartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (existingCartItems, itemToBeRemoved) => {
	const isCartItemExists = existingCartItems.find(
		(cartItem) => cartItem.id === itemToBeRemoved.id
	);

	if (isCartItemExists) {
		return existingCartItems.filter(
			(cartItem) => cartItem.id !== itemToBeRemoved.id
		);
	}

	return { ...existingCartItems };
};

export const decreaseCartItem = (
	existingCartItems,
	itemQuantityToBeDecreased
) => {
	const isCartItemExists = existingCartItems.find(
		(cartItem) => cartItem.id === itemQuantityToBeDecreased.id
	);

	if (isCartItemExists.quantity === 1) {
		return removeItemFromCart(existingCartItems, itemQuantityToBeDecreased);
	}
	return existingCartItems.map((cartItem) =>
		cartItem.id === itemQuantityToBeDecreased.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
