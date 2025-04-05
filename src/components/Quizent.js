import React, { useState } from 'react';
import '../App.css'; // Assuming styles are in App.css
import Idea from "./Idea";
import Coursesdata from "./Coursesdata ";

const optionsDict = {
  1: "Strongly Agree",
  2: "Agree",
  3: "Neutral",
  4: "Disagree",
  5: "Strongly Disagree"
};

const theQuestions = [
  "1. I enjoy challenging projects.",
  "2. I like taking risks in most aspects of my life.",
  "3. I spot opportunities where others don’t.",
  "4. I’m good at defining priorities and making an action plan.",
  "5. I love creative problem-solving.",
  "6. I always try to learn lessons from my failures.",
  "7. I’m always looking for new ideas.",
  "8. My friends would say that I'm a risk-taker.",
  "9. To be satisfied with myself, I take on easy projects.",
  "10. I’m curious and continually in search of discovery.",
  "11. I spot opportunities where others don’t.",
  "12. I love creative problem-solving.",
  "13. I like to lead others.",
  "14. I’m a lot less effective in stressful situations.",
  "15. I’d prefer to be my own boss.",

];

const Quizent = () => {
  const [answers, setAnswers] = useState(Array(theQuestions.length).fill(''));
  const [score, setScore] = useState(null);
  const [error, setError] = useState('');
  const [showScore, setShowScore] = useState(false);

  const handleButtonClick = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    let allAnswered = true;
  
    // Score mappings
    const scoreMapping = {
      1: 5,  // Strongly Agree -> 5 points
      2: 4,  // Agree -> 4 points
      3: 3,  // Neutral -> 3 points
      4: 2,  // Disagree -> 2 points
      5: 0   // Strongly Disagree -> 0 points
    };
  
    // Calculate the total score based on the user's answers
    answers.forEach((answer) => {
      if (!answer) {
        allAnswered = false;
        return;
      }
      // Map the selected value (1-5) to the corresponding score using scoreMapping
      totalScore += scoreMapping[parseInt(answer)];
    });
  
    if (!allAnswered) {
      setError('Please answer all questions before calculating the score.');
      return;
    }
  
    // Normalize the score to a percentage
    const maxScore = theQuestions.length * 5; // Maximum possible score (questions * 5 points)
    const normalizedScore = (totalScore / maxScore) * 100;
  
    setScore(normalizedScore.toFixed(2)); // Round to 2 decimal places
    setError('');
    setShowScore(true);
  
    // Optional: Hide the score after 3 seconds
    setTimeout(() => setShowScore(false), 3000);
  };
  
  
  return (
    <>
    <div className="assessment-container">
      <h2>Entrepreneurial Readiness Assessment</h2>
      {theQuestions.map((question, index) => (
        <div key={index} className="question-container">
          <p>{question}</p>
          <div className="options-container">
            {Object.entries(optionsDict).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleButtonClick(index, key)}
                className={`option-button ${
                  answers[index] === key ? 'selected' : ''
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={calculateScore} className="calculate-btn">
        Calculate Score
      </button>
      {error && <div className="error">{error}</div>}
      {score !== null && !error && (
        <div className={`result ${showScore ? 'visible' : ''}`}>
          Your total score is {score}
        </div>
      )}
    </div>
    <br/>

    <div>
      <Idea />
    </div>
    <br/>
    <div>
      <Coursesdata />
    </div>
    <br/>
    </>
  );
};

export default Quizent;