import React from 'react';
import ReactDOM from 'react-dom/client';
import QuizHandler from '../components/QuizHandler';

class Quiz extends React.Component {

    render() {
        return (
            <>
            <div data-testid="quiz-handler">
                <h1>Quiz</h1>
                <QuizHandler />
            </div>
            </>
        );
    }
}

export default Quiz;
