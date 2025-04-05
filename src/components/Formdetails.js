import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const FormDetails = ({ setSharedInterests }) => {
  const [interests, setInterests] = useState("");
  const [goals, setGoals] = useState("");
  const navigate = useNavigate();

  const saveDetails = () => {
    const interestsList = interests.split(',').map((item) => item.trim());
    setSharedInterests(interests); // Pass the raw user input (not split)
    navigate("/main");
};


  return (
    <div className="container">
      <h2>User Details Form</h2>
      <form id="userForm">
        <label htmlFor="interests">POTENTIAL STARTUP IDEA:</label>
        <textarea
          id="interests"
          rows="3"
          placeholder="List your interests (comma-separated)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        ></textarea>

        <label htmlFor="goals">Goals:</label>
        <textarea
          id="goals"
          rows="3"
          placeholder="List your goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        ></textarea>

        <button type="button" onClick={saveDetails}>
          Save Details
        </button>
      </form>
    </div>
  );
};

export default FormDetails;
