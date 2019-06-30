import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

export class Quiz extends Component {
  constructor(props) {
    super();

    this.state = {
      quiz_position: 1,
    };
  }

  render() {
    return (
      <div>
        <h1>Quiz</h1>
        <p>Data</p>
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
      </div>
    );
  }
}

export default Quiz;
