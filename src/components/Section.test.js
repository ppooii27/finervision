import 'regenerator-runtime/runtime'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';

const defaultProps = {
	title: 'Step 1: Your details',
	defaultExpanded: [{ id: 1, isExpanded: true }],
};

describe('Section component', () => {
	it('should render', async () => {
		render(
			<Section {...defaultProps}>
				<div>
					<label>Telephone number</label>
					<input type="tel" />
				</div>
			</Section>
		);
		expect(screen.getByText('Step 1: Your details')).toBeInTheDocument();
		expect(screen.getByText('Telephone number')).toBeInTheDocument();
	});
});
