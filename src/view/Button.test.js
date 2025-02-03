// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('increments count on button click', () => {
  // Render the Button component
  const { getByText } = render(<Button />);

  // Find the button element by its text
  const buttonElement = getByText(/Clicked 0 times/i);

  // Simulate a click event on the button
  fireEvent.click(buttonElement);

  // Expect the button text to be updated
  expect(buttonElement).toHaveTextContent('Clicked 1 times');
});
