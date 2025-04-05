import React from "react";
import "../App.css";

const Feature = ({ imgSrc, title }) => {
  return (
    <div className="feature">
      <img src={imgSrc} alt={title} className="feature-icon" />
      <p>{title}</p>
    </div>
  );
};

export default Feature;
