import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Add your own styles for better appearance

const SuccessPeopleSlideshow = () => {
  const slides = [
    {
      image: '/img/StoryBoard1.jpg', // Local image path
      text: 'John Doe - Entrepreneur and Innovator',
    },
    {
      image: '/img/StoryBoard2.jpg', // Local image path
      text: 'Jane Smith - Visionary Leader',
    },
    {
      image: '/img/StoryBoard3.jpg', // Local image path
      text: 'Michael Johnson - Tech Genius',
    },
    {
      image: '/img/StoryBoard4.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
    {
      image: '/img/StoryBoard5.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
    {
      image: '/img/StoryBoard6.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
    {
      image: '/img/StoryBoard7.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
    {
      image: '/img/StoryBoard8.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
    {
      image: '/img/StoryBoard9.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
    {
      image: '/img/StoryBoard10.jpg', // Local image path
      text: 'Emily Davis - Social Change Maker',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      // If the user is at the last slide, navigate to the form page
      navigate('/main'); // Change '/form-details' to your form page route
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img
          src={slides[currentSlide].image}
          alt="Success Person"
          className="slide-image"
        />
        <div className="slide-text">{slides[currentSlide].text}</div>
      </div>

      <div className="controls">
        <button onClick={prevSlide} className="prev-btn">Previous</button>
        <button onClick={nextSlide} className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default SuccessPeopleSlideshow;
