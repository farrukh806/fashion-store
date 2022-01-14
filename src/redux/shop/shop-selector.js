import { createSelector } from 'reselect';

const selecShop = (state) => state.shop;

export const selectCollections = createSelector([selecShop], (shop) => shop.collections);


