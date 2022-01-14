import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory-selector';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';

const Directory = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map((item) => (
				<MenuItem
					title={item.title}
					imageUrl={item.imageUrl}
					size={item.size}
					key={item.id}
					linkUrl={item.linkUrl}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
