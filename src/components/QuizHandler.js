import React from 'react';
import { useState } from 'react';
import { initialQuestions_1} from './QuestionHandler';


const shuffleQuestions = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function QuizPage() {
    const [selectedQuestions, setSelectedQuestions] = useState(shuffleQuestions(initialQuestions_1).slice(0, 10));
    const [selectedAnswers, setSelectedAnswers] = useState(false);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const calculateScore = () => {
        let correctAnswers = 0;
        selectedQuestions.forEach((question) => {
            if (selectedAnswers[question.id] === question.answer_key) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowScore(true);
    };

    const handleAnswerSelection = (questionId, selectedChoice) => {
        
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: selectedChoice,
        });
    };

    return (
        <div>
            <h1>Quiz</h1>
            {selectedQuestions.map((question) => (
                <div key={question.id}>
                    <h3>{question.question}</h3>
                    {Object.keys(question.choices).map((choiceKey) => (
                        <label key={choiceKey}>
                            <input
                                type="radio"
                                name={'question_${question.id}'}
                                value={choiceKey}
                                onChange={() => handleAnswerSelection(question.id, choiceKey)}
                            />
                            {question.choices[choiceKey]}
                        </label>
                    ))}
                </div>   
            ))}
            <button onClick={calculateScore} style={{ marginBottom: "40px"}}>Submit Quiz</button>
            {showScore && (
                <div>
                    <h2>Your Score: {score}/{selectedQuestions.length}</h2>
                </div>    
            )}
        </div>
    );
}