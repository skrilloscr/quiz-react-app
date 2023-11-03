import React, { Component } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the name of our galaxy ?',
    options: ['Whirlpool', 'Andromeda', 'Milkey way', 'Pinweel'],
    correctAnswer: 'Milkey way',
  },
  {
    question: 'Which planet is known as the Red Planet ?',
    options: ['Earth', 'Mars', 'Venus', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'How many planets are there in our solar system ?',
    options: ['4', '5', '7', '8'],
    correctAnswer: '8',
  },
  {
    question: 'Which planet is covered by clouds of sulphuric acid ?',
    options: ['Venus', 'Jupiter', 'Mercury', 'Neptune'],
    correctAnswer: 'Venus',
  },
  {
    question: 'Which planet is closest to the sun ?',
    options: ['Earth', 'Saturn', 'Mercury', 'Jupiter'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'Which planet has a day which last eight months ?',
    options: ['Venus', 'Mars', 'Saturn', 'Neptune'],
    correctAnswer: 'Venus',
  },
  {
    question: 'Who was the first man in space ?',
    options: ['Phyllis Barrington', 'Aniello Dellacroce', 'Neil Armstrong', 'Yuri Gagarin'],
    correctAnswer: 'Yuri Gagarin',
  },
  {
    question: 'Which is the largest planet in the solar system ?',
    options: ['Earth', 'Jupiter', 'Mars', 'Uranus'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Name the first artificial satellite ?',
    options: ['INSAT-1A', 'Aryabhata', 'Oceansat', 'Sputnik 1'],
    correctAnswer: 'Sputnik 1',
  },
  {
    question: 'What shape is the milkey way ?',
    options: ['Spiral', 'Oval', 'Rectangular', 'Circular'],
    correctAnswer: 'Spiral',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      selectedOption: '',
      score: 0,
      showScore: false,
    };
  }

  handleOptionSelect = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleNextQuestion = () => {
    const { currentQuestion, selectedOption, score } = this.state;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
      this.setState({ score: score + 1 });
    }

    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: '',
      });
    } else {
      this.setState({ showScore: true });
    }
  };

  handleResetQuiz = () => {
    this.setState({
      currentQuestion: 0,
      selectedOption: '',
      score: 0,
      showScore: false,
    });
  };

  render() {
    const { currentQuestion, selectedOption, score, showScore } = this.state;
    const question = questions[currentQuestion];
    const currentQuestionNumber = currentQuestion + 1;
    const totalQuestions = questions.length;

    return (
      <div>
        <h1 className="heading">SPACE QUIZ MANIA</h1>
        <div className="quiz-app">
          {showScore ? (
            <div className="score-section">
              <p className='sp1'>Thank You For Participating</p>
              YOU HAVE SCORED {score} OUT OF {questions.length}
              <p className='sp1'>Keep Growing Your Knowledge</p>
              <p className='sp1'>With Us</p>
              <button className="reset-button" onClick={this.handleResetQuiz}>
                RESET QUIZ <i class="fa-regular fa-hand-peace fa-spin-pulse"></i>
              </button>
            </div>
          ) : (
            <>
              <div className="question-count">
                Question {currentQuestionNumber} / {totalQuestions}  <i class="fa-solid fa-stopwatch fa-beat"></i>
              </div>
              {question ? (
                <div className="question-section">
                  <h2>Question {currentQuestionNumber}</h2>
                  <p>{question.question}</p>
                </div>
              ) : (
                <div className="question-section">
                  <p>No more questions available.</p>
                </div>
              )}
              <p className="paragraph">"CHOOSE THE CORRECT ANSWER FROM THE FOLLOWING OPTIONS"</p>
              <div className="options-section">
                {question
                  ? question.options.map((option, index) => (
                      <button
                        key={index}
                        className={`option ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => this.handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))
                  : null}
              </div>
              {selectedOption && (
                <button className="next-button" onClick={this.handleNextQuestion}>
                  Next <i class="fa-solid fa-forward fa-fade"></i>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
