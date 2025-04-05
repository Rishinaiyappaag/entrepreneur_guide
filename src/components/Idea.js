import React, { useState } from "react";
import axios from "axios";
import "../idea.css"

const Idea = () => {
  const [userInput, setUserInput] = useState(""); // State for input field
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const generateIdeas = async () => {
    const input = userInput.trim(); // Trim any extra whitespace
    if (!input) {
      setError("Input cannot be empty."); // Show error if input is empty
      return;
    }

    setIsLoading(true);
    setError("");

    const prompt = `
    As an experienced tech entrepreneur evaluating market opportunities, generate 5 innovative startup ideas leveraging:
    - Core Technologies: ${input}
    - Criteria for each idea:
      1. Clear market need
      2. Potential scalability
      3. Unique value proposition
      4. Brevity (4-word concept)

    Format: 

    - Concept
    - Brief Market Rationale
    `;

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDyVoS-4DJ47Xw9f_3LWnjyH2tUEfTMNLo",
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });

      const generatedIdeas = response.data.candidates[0].content.parts[0].text;
      setIdeas(generatedIdeas.split("\n").filter((idea) => idea.trim() !== ""));
    } catch (err) {
      setError("Sorry, something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Startup Ideas Generator</h1>

      <div className="input-container">
        <label htmlFor="core-technologies">Potential Startup Idea:</label>
        <input
          type="text"
          id="core-technologies"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Eg. Your Start-up Business"
        />
      </div>

      <button onClick={generateIdeas} disabled={isLoading}>
        {isLoading ? "Generating..." : "Enter"}
      </button>

      {error && <div className="error">{error}</div>}

      {ideas.length > 0 && (
        <div className="generated-ideas">
          <h2>Generated Startup Ideas:</h2>
          <ul>
            {ideas.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};

export default Idea;
