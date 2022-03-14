import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../../components/Search/Index';

describe('<Search/>', () => {
	let setComment: any;
	const handleSetComment = jest.fn((data) => {
		setComment = data;
	});

	const mockResponse = [
		{
			id: 1,
			firstname: 'dan',
			surname: 'lo',
			gender: 'M',
			email: 'email@email.com',
			telephone: '0123456789',
			dob: '01-01-2001',
			comments: 'fff',
		},
	];

	it('should display a search box and search button', async () => {
		render(<Search setComments={handleSetComment} />);

		expect(screen.getByTestId('input-search')).toBeInTheDocument();
		expect(screen.getByTestId('search-button')).toBeInTheDocument();
	});

	it('should fetched data to set comment', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		) as jest.Mock;

		render(<Search setComments={handleSetComment} />);

		fireEvent.click(screen.getByTestId('search-button'));
		await screen.findAllByText('Search');
		expect(handleSetComment).toHaveBeenCalled();
		expect(setComment).toBe(mockResponse);
	});
});
