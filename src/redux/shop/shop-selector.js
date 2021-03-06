import { createSelector } from 'reselect';

const selecShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selecShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	);
