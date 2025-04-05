import React, { useState } from "react";
import "../App.css"; // Assuming the styles are in a separate CSS file
import Mentalresult from "./Mentalresult";
import "../videos.css"; // Ensure this file contains the CSS for the videos

// YouTube video links
const videoLinks = [
  "https://youtu.be/nCrjevx3-Js?si=h5jmOKXVrfJFsf6E",
  "https://youtu.be/xRxT9cOKiM8?si=QjpNXg2gr8rxBMxz",
  "https://youtu.be/ztTexqGQ0VI?si=OQ8bC5oAzMLJerfG",
  "https://youtu.be/sfSDQRdIvTc?si=xK1G_8FkjVjt5",
  "https://youtu.be/nCrjevx3-Js?si=h5jmOKXVrfJFsf6E",
  "https://youtu.be/xRxT9cOKiM8?si=QjpNXg2gr8rxBMxz",
  "https://youtu.be/ztTexqGQ0VI?si=OQ8bC5oAzMLJerfG",
  "https://youtu.be/sfSDQRdIvTc?si=xK1G_8FkjVjt5",
  "https://youtu.be/wOGqlVqyvCM?si=hpRQQCa-QDvaWgvz",
  "https://youtu.be/-fFY9chIWJg?si=YrfKZTBrf-hefBZg",
  "https://youtu.be/tqhxMUm7XXU?si=eL1mpc0xdmOISEBB",
  "https://youtu.be/COp7BR_Dvps?si=_SYDA6lBiUARehA_",
  "https://youtu.be/1nP5oedmzkM?si=n9A3Z0JVpFkcCCr9",
  "https://youtu.be/nCrjevx3-Js?si=h5jmOKXVrfJFsf6E",
  "https://youtu.be/xRxT9cOKiM8?si=QjpNXg2gr8rxBMxz",
  "https://youtu.be/ztTexqGQ0VI?si=OQ8bC5oAzMLJerfG",
  "https://youtu.be/sfSDQRdIvTc?si=xK1G_8FkjVjt5",
  "https://youtu.be/wOGqlVqyvCM?si=hpRQQCa-QDvaWgvz",
  "https://youtu.be/-fFY9chIWJg?si=YrfKZTBrf-hefBZg",
  "https://youtu.be/tqhxMUm7XXU?si=eL1mpc0xdmOISEBB",
  "https://youtu.be/COp7BR_Dvps?si=_SYDA6lBiUARehA_",
  "https://youtu.be/1nP5oedmzkM?si=n9A3Z0JVpFkcCCr9",
];

// Helper to convert YouTube links to embed format
const convertToEmbed = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1]?.split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

// Define the quiz questions and answers options
const optionsDict = {
  1: "strongly agree",
  2: "agree",
  3: "slightly agree",
  4: "slightly disagree",
  5: "disagree",
  6: "strongly disagree",
};

const theQuestions = [
  "1. I have healthy ways to cope with pressure and anxiety",
  "2. I prioritize my physical and mental health alongside work",
  "3. I have a strong support system outside of work",
  "4. I make time for activities that recharge me",
  "5. I can make difficult decisions without being paralyzed by fear",
  "6. I can handle multiple problems simultaneously without feeling overwhelmed",
  "7. Money worries don't keep me awake at night",
  "8. I actively work on self-improvement",
  "9. I maintain realistic expectations about entrepreneurship",
  "10. I acknowledge when I need help or support",
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(theQuestions.length).fill(""));
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");

  const handleSelectChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    let allAnswered = true;

    answers.forEach((answer) => {
      if (!answer) {
        allAnswered = false;
        return;
      }
      totalScore += Math.abs(parseInt(answer) - 6); // Lower score means more aligned with entrepreneurial resilience
    });

    if (!allAnswered) {
      setError("Please answer all questions before calculating the score.");
      return;
    }

    setScore(totalScore);
    setError("");
  };

  return (
    <>
      <div className="assessment-container">
        <h2>Mental Health Scorer</h2>

        {theQuestions.map((question, index) => (
          <div key={index} className="question-container">
            <p>{question}</p>
            <select
              value={answers[index]}
              onChange={(e) => handleSelectChange(e, index)}
              className="option-select"
            >
              <option value="" disabled>
                Select an option
              </option>
              {Object.entries(optionsDict).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button onClick={calculateScore} className="calculate-btn">
          Calculate Score
        </button>

        {error && <div className="error">{error}</div>}
      </div>
      <br />

      {score !== null && !error && (
        <>
          <Mentalresult score={score} />

          <div className="testimonial-section">
            <h2>Mental Health Support Recommended Videos</h2>
            <div className="marquee">
              <div className="marquee-content">
                {[...videoLinks, ...videoLinks].map((link, index) => (
                  <div className="testimonial-card" key={index}>
                    <iframe
                      src={convertToEmbed(link)}
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className="testimonial-caption">
                      "This video offers great insights into entrepreneurial resilience."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <br />
    </>
  );
};

export default Quiz;
