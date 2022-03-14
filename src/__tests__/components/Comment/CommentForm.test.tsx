import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from '../../../components/Comment/CommentForm';

const mockResponse = {
	id: 1,
	firstname: 'dan',
	surname: 'lo',
	gender: 'M',
	email: 'email@email.com',
	telephone: '0123456789',
	dob: '01-01-2001',
	comments: 'fff',
	ok: true,
};
describe('<CommentForm />', () => {
	it('should displays a empty form', async () => {
		render(<CommentForm />);
		const buttons = screen.getAllByRole('button', { expanded: false });

		expect(screen.getByTestId('comment')).toBeInTheDocument();
		expect(screen.getByTestId('dob-year')).toBeInTheDocument();
		expect(screen.getByTestId('dob-month')).toBeInTheDocument();
		expect(screen.getByTestId('dob-day')).toBeInTheDocument();
		expect(screen.getByTestId('gender')).toBeInTheDocument();
		expect(screen.getByTestId('telephone')).toBeInTheDocument();
		expect(screen.getByTestId('email')).toBeInTheDocument();
		expect(screen.getByTestId('surname')).toBeInTheDocument();
		expect(screen.getByTestId('firstname')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { expanded: true })
		).toHaveTextContent('Step 1: Your details');
		expect(buttons[0]).toHaveTextContent('Step 2: More comments');
		expect(buttons[1]).toHaveTextContent('Step 3: Final comments');
	});

	it('should displays the step 2 and step 3 form', async () => {
		render(<CommentForm />);
		const nextBtn = screen.getAllByTestId('next-button');
		const firstname = screen.getByTestId('firstname');
		const surname = screen.getByTestId('surname');
		const email = screen.getByTestId('email');
		const telephone = screen.getByTestId('telephone');
		const gender = screen.getByTestId('gender');
		const day = screen.getByTestId('dob-day');
		const month = screen.getByTestId('dob-month');
		const year = screen.getByTestId('dob-year');

		fireEvent.change(firstname, { target: { value: '123' } });
		fireEvent.change(surname, { target: { value: '123' } });
		fireEvent.change(email, { target: { value: '123@123.com' } });
		fireEvent.click(nextBtn[0]); // It's next button of step 2
		expect(
			screen.getByRole('button', { expanded: true })
		).toHaveTextContent('Step 2: More comments');
		const step2HiddenSection = screen.getAllByRole('button', {
			expanded: false,
		});
		expect(step2HiddenSection[0]).toHaveTextContent('Step 1: Your details');
		expect(step2HiddenSection[1]).toHaveTextContent(
			'Step 3: Final comments'
		);

		fireEvent.change(telephone, { target: { value: '0123456789' } });
		fireEvent.change(gender, { target: { value: 'male' } });
		fireEvent.change(day, { target: { value: '1' } });
		fireEvent.change(month, { target: { value: '1' } });
		fireEvent.change(year, { target: { value: '2001' } });
		fireEvent.click(nextBtn[1]); // It's next button of step 2

		expect(
			screen.getByRole('button', { expanded: true })
		).toHaveTextContent('Step 3: Final comments');
		const step3HiddenSection = screen.getAllByRole('button', {
			expanded: false,
		});
		expect(step3HiddenSection[0]).toHaveTextContent('Step 1: Your details');
		expect(step3HiddenSection[1]).toHaveTextContent(
			'Step 2: More comments'
		);
	});

	it('should reset the form after form submitted', async () => {
		render(<CommentForm />);
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		) as jest.Mock;

		const nextBtn = screen.getAllByTestId('next-button');
		const firstname = screen.getByTestId('firstname');
		const surname = screen.getByTestId('surname');
		const email = screen.getByTestId('email');
		const telephone = screen.getByTestId('telephone');
		const gender = screen.getByTestId('gender');
		const day = screen.getByTestId('dob-day');
		const month = screen.getByTestId('dob-month');
		const year = screen.getByTestId('dob-year');
		const comment = screen.getByTestId('comment');

		/* step 1 input and click next button */
		fireEvent.change(firstname, { target: { value: '123' } });
		fireEvent.change(surname, { target: { value: '123' } });
		fireEvent.change(email, { target: { value: '123@123.com' } });
		fireEvent.click(nextBtn[0]); // It's next button of step 2

		/* step 2 input and click next button */
		fireEvent.change(telephone, { target: { value: '0123456789' } });
		fireEvent.change(gender, { target: { value: 'male' } });
		fireEvent.change(day, { target: { value: '1' } });
		fireEvent.change(month, { target: { value: '1' } });
		fireEvent.change(year, { target: { value: '2001' } });
		fireEvent.click(nextBtn[1]); // It's next button of step 2

		/* step 3 input and click next button */
		fireEvent.change(comment, { target: { value: 'nice' } });
		fireEvent.click(nextBtn[2]); // It's next button of step 3

		await screen.findAllByText('Comments');
		expect(global.fetch).toHaveBeenCalled();
		expect(firstname).toHaveValue('');
		expect(surname).toHaveValue('');
		expect(email).toHaveValue('');
		expect(telephone).toHaveValue('');
		expect(gender).toHaveValue('');
		expect(day).toHaveValue(null);
		expect(month).toHaveValue(null);
		expect(year).toHaveValue(null);
		expect(comment).toHaveValue('');
	});
});
