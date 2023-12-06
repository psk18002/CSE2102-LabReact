import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home Component', () => {
  test('Renders home title correctly', () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText(/Welcome to Trivia!/i);
    expect(titleElement).toBeInTheDocument();
  });
});
