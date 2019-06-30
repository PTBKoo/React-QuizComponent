import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';

const quizData = require('./quiz_data.json');

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1,
    };
  }

  render() {
    return (
      <div>
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
      </div>
    );
  }
}

export default Quiz;
