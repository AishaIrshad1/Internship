import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const quizData = [
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Rome"], answer: "Paris" },
  { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
  { question: "Which number is a prime?", options: ["4", "6", "9", "7"], answer: "7" },
  { question: "What is the square root of 64?", options: ["6", "8", "10", "12"], answer: "8" },
  { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "NaCl", "CO2"], answer: "H2O" },
  { question: "What is 10 × 10?", options: ["100", "10", "1000", "110"], answer: "100" },
  { question: "Which language is used for web apps?", options: ["Python", "JavaScript", "C", "Swift"], answer: "JavaScript" },
  { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], answer: "Da Vinci" },
  { question: "What gas do plants breathe in?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: "Carbon Dioxide" },
  { question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Leopard"], answer: "Lion" },
  { question: "HTML stands for?", options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language", "Hyperlinking Textual Management Language"], answer: "HyperText Markup Language" },
  { question: "Which continent is the largest?", options: ["Africa", "Asia", "Europe", "Antarctica"], answer: "Asia" },
  { question: "How many legs do spiders have?", options: ["6", "8", "10", "12"], answer: "8" },
  { question: "What is the capital of Pakistan?", options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], answer: "Islamabad" },
  { question: "Who invented the light bulb?", options: ["Newton", "Tesla", "Einstein", "Thomas Edison"], answer: "Thomas Edison" },
  { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
  { question: "What is the boiling point of water?", options: ["90°C", "95°C", "100°C", "110°C"], answer: "100°C" },
  { question: "Which country is famous for sushi?", options: ["China", "Thailand", "Japan", "South Korea"], answer: "Japan" },
  { question: "In which direction does the sun rise?", options: ["North", "East", "South", "West"], answer: "East" },
  { question: "Which part of the computer is the brain?", options: ["RAM", "CPU", "Hard Drive", "Monitor"], answer: "CPU" }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === quizData[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, {
      question: quizData[currentQuestion].question,
      correct: quizData[currentQuestion].answer,
      selected: selectedOption
    }]);

    const next = currentQuestion + 1;
    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}> Quiz App</h1>
      {!isFinished && quizData[currentQuestion] ? (
        <QuestionCard
          questionData={quizData[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2> Your Score: {score} / {quizData.length}</h2>
          <h3 style={{ marginTop: '20px' }}> Review Your Answers:</h3>
          <ol style={{ textAlign: 'left' }}>
            {userAnswers.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{item.question}</strong><br />
                {item.selected === item.correct ? (
                  <span style={{ color: 'green' }}>✅ Correct: {item.correct}</span>
                ) : (
                  <span style={{ color: 'red' }}>
                    ❌ Your Answer: {item.selected} | Correct: {item.correct}
                  </span>
                )}
              </li>
            ))}
          </ol>
          <button onClick={restartQuiz} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            🔁 Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
