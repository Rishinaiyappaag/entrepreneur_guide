import React from "react";
import "../Mental.css";

const Mentalresult = ({ score }) => {
  // Ensure the score's position aligns with a range of 0 to 50
  const scorePosition = (score / 50) * 100;

  return (
    <div className="mental-health-card">
      <h1>Your Mental Health Today Test Score</h1>
      <div className="score-bar">
        <div
          className="score-indicator"
          style={{ left: `${scorePosition}%` }}
        >
          {score}
        </div>
      </div>
      <div className="score-scale">
        <div className={`scale-item ${score >= 5 && score <= 15 ? 'highlight' : ''}`}>
          <p>0-15</p>
          <p>Struggling</p>
        </div>
        <div className={`scale-item ${score > 15 && score <= 20 ? 'highlight' : ''}`}>
          <p>15-20</p>
          <p>Struggling somewhat</p>
        </div>
        <div className={`scale-item ${score > 20 && score <= 30 ? 'highlight' : ''}`}>
          <p>25-30</p>
          <p>Coping</p>
        </div>
        <div className={`scale-item ${score > 30 && score <= 40 ? 'highlight' : ''}`}>
          <p>35-40</p>
          <p>Coping well</p>
        </div>
        <div className={`scale-item ${score > 40 && score <= 50 ? 'highlight' : ''}`}>
          <p>45-50</p>
          <p>Flourishing</p>
        </div>
      </div>
    </div>
  );
};

export default Mentalresult;
