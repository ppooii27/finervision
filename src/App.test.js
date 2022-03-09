import 'regenerator-runtime/runtime'
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Step 2: More comments/i);
  expect(linkElement).toBeInTheDocument();
});
