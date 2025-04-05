import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

const Feature = ({ imgSrc, title, onButtonClick }) => (
  <div className="feature-card">
    <img src={imgSrc} alt={title} className="feature-image" />
    <h3 className="feature-title">{title}</h3>
    <button className="feature-button" onClick={onButtonClick}>
      Learn More
    </button>
  </div>
);

const Cards = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="feature-section">
      <Feature
        imgSrc="/img/bot.png"
        title="Interactive Chatbot"
        onButtonClick={() => navigate("/chatbot")}
      />
      <Feature
        imgSrc="/img/idea.png"
        title="Entrepreneur Lobby"
        onButtonClick={() => navigate("/quizent")}
      />
      <Feature
        imgSrc="/img/Quiz.png"
        title="Mental Health Support"
        onButtonClick={() => navigate("/quiz")}
      />
    </div>
    <br/>
    </>
  );
};


export default Cards;
