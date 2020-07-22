import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddButton from './AddButton';

test('renders button', () => {
  const { getByText } = render(<AddButton />);
  const myButton = getByText(/Add/i);
  expect(myButton).toBeInTheDocument();
});

test('add button contains Add', () => {
    const {getByText} = render(<AddButton />);
    const myButton = getByText(/Add/i);

    fireEvent.click(getByText(/Add/i))

    expect(myButton).toHaveTextContent('Remove Post-it')
    const myButtonAgain = getByText(/Remove/i);
    fireEvent.click(getByText(/Remove/i))
    
    expect(myButtonAgain).toHaveTextContent('Add Post-it')

})