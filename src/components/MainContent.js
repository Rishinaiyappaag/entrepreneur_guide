import React from "react";
import Testimonials from "./Testimonials";
import Cards from "./cards";
import "../App.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Welcome to EntrepreneurGuide</h1>
      <p>
        Discover tools and resources to help you become a successful entrepreneur. 
        Engage with our interactive chatbot and take our motivational quiz to kickstart your journey.
      </p>
      <Testimonials />
      <Cards />
    </main>
  );
};

export default MainContent;
