import React from 'react';

function QuestionCard({ questionData, onAnswer }) {
  const { question, options } = questionData;

  return (
    <div style={styles.card}>
      <h2 style={styles.question}>{question}</h2>
      <div>
        {options.map((option, idx) => (
          <button
            key={idx}
            style={styles.button}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px'
  },
  question: {
    marginBottom: '20px',
    fontSize: '1.4rem',
    color: '#333'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px 16px',
    marginBottom: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff', // 💙 BLUE
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default QuestionCard;
