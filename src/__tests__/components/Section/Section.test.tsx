import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Section from '../../../components/Section/Section';

const defaultProps: any = {
	title: 'Step 1: Your details',
	defaultExpanded: [{ id: 1, isExpanded: true }],
};

describe('<Section/>', () => {
	const handleButtonClick = jest.fn();
	it('should display a section included title and child component', async () => {
		render(
			<Section {...defaultProps} handleNext={handleButtonClick}>
				<div>
					<label>Telephone number</label>
					<input type="tel" data-testid="input-test" />
				</div>
			</Section>
		);

		expect(screen.getByText('Step 1: Your details')).toBeInTheDocument();
		expect(screen.getByText('Telephone number')).toBeInTheDocument();
		expect(screen.getByTestId('input-test')).toBeInTheDocument();
	});

	it('should allow trriggering the handleNext function', async () => {
		render(
			<Section {...defaultProps} handleNext={handleButtonClick}>
				<div>
					<label>Telephone number</label>
					<input type="tel" />
				</div>
			</Section>
		);
		fireEvent.click(screen.getByTestId('next-button'));
		expect(handleButtonClick).toHaveBeenCalled();
	});
});
