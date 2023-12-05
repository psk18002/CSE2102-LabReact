import React from 'react'
import { useReducer, useState } from "react";

export const initialQuestions_1 = [
    {
        id: 1,
        question: "What is the color of the sky?",
        choices: {A:"Green", B:"Red", C:"Blue", D:"Yellow", E:"Clear"},
        answer_key: "C"
    },

    {   
        id: 2,
        question: "What is the color of space?",
        choices: {A:"Green", B:"Red", C:"Blue", D:"Yellow", E:"Clear"},
        answer_key: "E"
    },

    {   
        id: 3,
        question: "Are electrons quantum?",
        choices: {A:"Yes", B:"No", C:"Neither A or B", D:"Both A and B", E:"Something else"},
        answer_key: "A"
    },

    {
        id: 4,
        question: "What is 12 x 12?",
        choices: {A:"121", B:"244", C:"100", D:"144", E:"156"},
        answer_key: "D"
    },

    {
        id: 5,
        question: "In which city is the Empire State Building located in?",
        choices: {A:"Chicago", B:"New York City", C:"Miami", D:"Atlantic City", E:"San Francisco"},
        answer_key: "B"
    },

    {
        id: 6,
        question: "How many US territories are there?",
        choices: {A:"2", B:"5", C:"10", D:"16", E:"20"},
        answer_key: "D"
    },

    {
        id: 7,
        question: "How many countries are formally recognized by the UN?",
        choices: {A:"193", B:"195", C:"256", D:"198", E:"217"},
        answer_key: "A"
    },

    {
        id:8,
        question: "Which planet is the third planet from the Sun?",
        choices: {A:"Venus", B:"Earth", C:"Mars", D:"Pluto", E:"Neptune"},
        answer_key: "B"
    },

    {
        id: 9,
        question: "What is the capital of Puerto Rico?",
        choices: {A:"Ponce", B:"Vega Baja", C:"Caguas", D:"Guaynabo", E:"San Juan"},
        answer_key: "E"
    },

    {
        id:10,
        question: "What is the circumference of the Earth (in km)?",
        choices: {A:"40,075", B:"7,926", C:"12,756", D:"24,901", E:"5,972"},
        answer_key: "A"
    },

    {
        id:11,
        question: "Is the square root of two a rational number?",
        choices: {A:"Yes", B:"No"},
        answer_key: "B"
    },

    {
        id:12,
        question: "How many planets are in our solar system?",
        choices: {A:"7", B:"8", C:"9", D:"10", E:"11"},
        answer_key: "B"
    },

    {
        id:13,
        question: "What is the closest planet to the Sun?",
        choices: {A:"Neptune", B:"Uranus", C:"Mars", D:"Mercury", E:"Venus"},
        answer_key: "D"
    },

    {
        id:14,
        question: "What is the binary code for the letter G",
        choices: {A:"01001000", B:"01001010", C:"01000111", D:"01001001", E:"01011001"},
        answer_key: "C"
    },

    {
        id:15,
        question: "Is JavaScript only a declarative language?",
        choices: {A:"Yes", B:"No"},
        answer_key: "B"
    },

    {
        id:16,
        question: "How many languages are derived from Latin?",
        choices: {A:"44", B:"45", C:"46", D:"47", E:"48"},
        answer_key: "D"
    },

    {
        id:17,
        question: "Is there an error recorded on the browser's console?",
        choices: {A:"Yes", B:"No"},
        answer_key: "A"
    },

    {
        id:18,
        question: "How many days are there in a leap year?",
        choices: {A:"365", B:"364", C:"365.25", D:"363", E:"366"},
        answer_key: "E"
    },

    {
        id:19,
        question: "What is taxonomic kingdom of humans?",
        choices: {A:"Phylum", B:"Chordate", C:"Animalia", D:"Mammalia", E:"Hominidae"},
        answer_key: "C"
    },

    {
        id:20,
        question: "What is the result of 74 x 2 + 10",
        choices: {A:"740", B:"158"},
        answer_key: "B"
    }
];

const initialBookmarkedQuestions_2 = [
    
    {
        id: 1,
        question: "Is there an error recorded on the browser's console?",
        choices: {A:"Yes", B:"No"},
        answer_key: "A"
    },

    {
        id: 2,
        question: "What is the circumference of the Earth (in km)?",
        choices: {A:"40,075", B:"7,926", C:"12,756", D:"24,901", E:"5,972"},
        answer_key: "A"
    },

    {
        id: 3,
        question: "Are electrons quantum?",
        choices: {A:"Yes", B:"No", C:"Neither A or B", D:"Both A and B", E:"Something else"},
        answer_key: "A"
    }
];

const reducer = (state, action) => {
    
    switch (action.type) {
        case "regularQuestions":
            return action.value;
        case "bookmarkedQuestions":
            return action.value;
        case "delBookmarkedQuestions":
            return action.value;
        default:
            console.log("Error in reducer!");
            return state;
    }
};


export default function QuestionHandler() {
    const [questions, setQuestions] = useReducer(reducer, []);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const regularQuestions = () => {
        setQuestions({ type: "regularQuestions", value: initialQuestions_1});
    };

    const bookmarkedQuestions = () => {
        setQuestions({ type: "bookmarkedQuestions", value: initialBookmarkedQuestions_2});
    };

    const handleAnswerSelection = (questionId, selectedChoice) => {
        
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: selectedChoice,
        });
    };

    const checkAnswer = (questionId) => {
        
        const selectedChoice = selectedAnswers[questionId];

        const question = questions.find((q) => q.id === questionId);

        if (selectedChoice && question) {

            const isCorrect = selectedChoice === question.answer_key;

            question.isCorrect = isCorrect;

            setQuestions({ type: "regularQuestions", value: [...questions]});
        }
    };

    const resetQuestions = () => {
        setSelectedAnswers({});

        const radioButtons = document.querySelectorAll('input[type="radio"');
        radioButtons.forEach((radio) =>{
            radio.checked = false;     
        });

        const updatedQuestions = questions.map(question => ({
            ...question,
            isCorrect: undefined,
        }));
    
        setQuestions({ type: "regularQuestions", value: updatedQuestions});
    };



    return (
        <>
        <button onClick={regularQuestions}>
            Regular Questions
        </button>
        {' '}
        <button onClick={bookmarkedQuestions}>
            Bookmarked Questions
        </button>
        {' '}
            {questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.question}</p>
                        {Object.keys(question.choices).map((choiceKey) => (
                            <label key={choiceKey}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={choiceKey}
                                    onChange={() =>
                                        handleAnswerSelection(question.id, choiceKey)
                                    }
                                />
                                {question.choices[choiceKey]}
                            </label>
                        ))}
                        <button onClick={() => checkAnswer(question.id)}>Check Answer</button>
                        {question.isCorrect !== undefined && (
                            <p>
                                {question.isCorrect ? 'Correct!': 'Incorrect!'}
                            </p>
                        )}
                    </div>
                ))}
                <div>
                    <button onClick={resetQuestions} style={{ marginBottom: '40px '}}>Reset Questions</button>
                </div>
        </>
    );
}
