import React from 'react';
import { render } from '@testing-library/react';
import Quiz from '../pages/Quiz';

describe('Quiz Component', () => {
  test('Renders quiz questions and calculates score correctly', () => {
    const { getByTestId } = render(<Quiz />)

    const quizHandlerElement = getByTestId('quiz-handler');r
    expect(quizHandlerElement).toBeInTheDocument();
  });
});
