import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '../../styles/nav';

const index: React.FC = () => {
	return (
		<Menu>
			<MenuItem>
				<Link to="/">Home</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/comments">Comments</Link>
			</MenuItem>
		</Menu>
	);
};

export default index;
