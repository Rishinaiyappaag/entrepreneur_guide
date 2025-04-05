import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import cards from "./components/cards";
import Chatbot from "./components/Chatbot";
import Quiz from "./components/Quiz";
import Quizent from "./components/Quizent";
import Lg from "./components/Lg";
import SB from "./components/SB";
import Formdetails from "./components/Formdetails";
import Idea from "./components/Idea";
import "./App.css";

const App = () => {
  const [sharedInterests, setSharedInterests] = useState(""); // Shared state for FormDetails and Idea

  return (
    <Router>
      <div className="app-container">
        {/* Header and Footer are rendered conditionally based on the route */}
        <Routes>
          <Route path="/*" element={<Header />} />
        </Routes>

        <Routes>
          {/* Set Login as the default route */}
          <Route path="/" element={<Lg />} />

          {/* Main application routes */}
          <Route path="/main" element={<MainContent />} />
          <Route path="/features" element={<cards />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizent" element={<Quizent />} />
          <Route path="/slideshow" element={<SB />} />

          {/* FormDetails and Idea Routes */}
          <Route
              path="/form-details"
              element={<Formdetails setSharedInterests={(value) => setSharedInterests(value || "")} />}
          />
        <Route path="/idea" element={<Idea userInput={sharedInterests} />} />

        </Routes>

        <Routes>
          <Route path="/*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
