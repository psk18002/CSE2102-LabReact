import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Questions from '../pages/Questions';

describe('Questions Component', () => {
  test('Renders questions header and QuestionHandler component', () => {
    const { getByText, getByTestId } = render(<Questions />);

    const headerElement = getByText(/Questions Page/i);
    expect(headerElement).toBeInTheDocument();

    const questionHandlerElement = getByTestId('question-handler');
    expect(questionHandlerElement).toBeInTheDocument();
  });
});
