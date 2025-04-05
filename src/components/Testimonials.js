import React, { useState, useEffect } from "react";
import "../App.css";


const Progress = () => {
  const progressPercentage = 45; // Example progress percentage, could be dynamic

  // Determine which image to display based on the progress percentage
  const getProgressImage = (percentage) => {
    if (percentage <= 30) {
      return "/img/SaplingAni1.gif"; // Path to seed image
    } else if (percentage <= 70) {
      return "/img/SaplingAni3.gif"; // Path to small plant image
    } else {
      return "/img/SaplingAni4.gif"; // Path to tree image
    }
  };

  const progressImage = getProgressImage(progressPercentage);

  return (
    <div className="progress-card">
      <div className="profile-bg">
        <div className="profile">
          <img
            src="/img/Girl_profile.png" // Replace with actual user profile image URL
            alt="User Profile"
            className="profile-pic"
          />
        </div>
      </div>
      <div className="progress-info">
        <h3>John Doe</h3>
        <p>Progress</p>
        <img src={progressImage} alt="Progress Stage" className="progress-image" />
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span>{progressPercentage}%</span>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "EntrepreneurGuide helped me turn my idea into a thriving business!",
    author: "John Doe, Founder of Startup X",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "The resources and tools available here are invaluable for any entrepreneur.",
    author: "Jane Smith, CEO of Innovate Co.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "I learned so much about managing my business efficiently. Highly recommended!",
    author: "Michael Lee, Owner of Creative Solutions",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Thanks to EntrepreneurGuide, I secured funding for my dream project.",
    author: "Emily Davis, Entrepreneur",
    image:
      "https://images.pexels.com/photos/3184585/pexels-photo-3184585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonial">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].author}
          className="testimonial-image"
        />
        <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
        <p className="testimonial-author">- {testimonials[currentIndex].author}</p>
      </div>
      {/* Progress Section */}
      <div className="progress-section">
        <Progress />
      </div>
    </div>
  );
};

export default Testimonials;
