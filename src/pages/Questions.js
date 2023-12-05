import React from 'react';
import ReactDOM from 'react-dom/client';
import QuestionHandler from '../components/QuestionHandler';

class Questions extends React.Component {

    render() {
        return (
            <>
              <h1>Questions Page</h1>
              <QuestionHandler />
            </>
        );
    }
}

export default Questions;
