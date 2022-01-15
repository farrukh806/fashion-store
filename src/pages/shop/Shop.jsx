import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/Collection';
import CollectionOverview from '../../components/collection-overview/collection-overview';

import './Shop.scss';

const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverview}
			/>
			<Route
				exact
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</div>
	);
};

export default ShopPage;
