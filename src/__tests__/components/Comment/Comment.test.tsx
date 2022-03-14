import React from 'react';
import { render, screen } from '@testing-library/react';
import ListComment from '../../../components/Comment/ListComment';

const defaultProps: any = [{
	id: 1,
	firstname: 'daniel',
	surname: 'lo',
	gender: 'M',
	email: 'email@email.com',
	telephone: '0123456789',
	dob: '01-01-2001',
	comments: 'nice'
}]

describe('<Comment/> and <ListComment/>', () => {
	it('should display a proper header and list of comment', async () => {
		render(<ListComment comments={defaultProps} />);

		/* <ListComment /> */
		expect(screen.getByTestId('header-firstname')).toHaveTextContent('First Name');
		expect(screen.getByTestId('header-surname')).toHaveTextContent('Surname');
		expect(screen.getByTestId('header-gender')).toHaveTextContent('Gender');
		expect(screen.getByTestId('header-email')).toHaveTextContent('Email');
		expect(screen.getByTestId('header-telephone')).toHaveTextContent('Telephone');
		expect(screen.getByTestId('header-dob')).toHaveTextContent('Date of birth');
		expect(screen.getByTestId('header-comment')).toHaveTextContent('Comment');

		/* <Comment /> */
		expect(screen.getByTestId('firstname')).toHaveTextContent('daniel');
		expect(screen.getByTestId('surname')).toHaveTextContent('lo');
		expect(screen.getByTestId('gender')).toHaveTextContent('M');
		expect(screen.getByTestId('email')).toHaveTextContent('email@email.com');
		expect(screen.getByTestId('telephone')).toHaveTextContent('0123456789');
		expect(screen.getByTestId('dob')).toHaveTextContent('01-01-2001');
		expect(screen.getByTestId('comment')).toHaveTextContent('nice');
	});
})