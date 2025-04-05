import React from "react";
import "../courses.css"

const coursesData = [
  {
    category: "Communication Skills",
    courses: [
      {
        name: "People and Soft Skills Assessment - IBM",
        link: "https://www.coursera.org/learn/people-soft-skills-assessment?action=enroll",
      },
      {
        name: "Effective Communication: Writing, Design, and Presentation Specialization - University of Colorado Boulder",
        link: "https://www.coursera.org/specializations/effective-business-communication",
      },
    ],
  },
  {
    category: "Entrepreneurship",
    courses: [
      {
        name: "Entrepreneurship Course for Beginners",
        link: "https://www.udemy.com/course/entrepreneurship-course-for-beginners/",
      },
      {
        name: "English for Business and Entrepreneurship - University of Pennsylvania",
        link: "https://www.coursera.org/learn/business",
      },
      {
        name: "Entrepreneurial Management",
        link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/entrepreneurial-management",
      },
    ],
  },
  {
    category: "Mindset and Personal Development",
    courses: [
      {
        name: "Developing An Entrepreneurial Mindset: First Step Towards Success",
        link: "https://www.coursera.org/learn/entrepreneurial-mindset",
      },
      {
        name: "The Growth Mindset",
        link: "https://www.coursera.org/learn/growth-mindset",
      },
    ],
  },
  {
    category: "Business Skills",
    courses: [
      {
        name: "Business Foundations Specialization",
        link: "https://www.coursera.org/specializations/wharton-business-foundations",
      },
      {
        name: "Business and Marketing Strategies Specialization",
        link: "https://www.coursera.org/specializations/uol-business-and-marketing-strategies",
      },
      {
        name: "Business English: Networking",
        link: "https://www.coursera.org/learn/business-english-intro",
      },
    ],
  },
];

const CourseSection = ({ category, courses }) => (
  <div className="section">
    <h2>{category}</h2>
    <div className="courses">
      {courses.map((course, index) => (
        <div key={index} className="course">
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            {course.name}
          </a>
        </div>
      ))}
    </div>
  </div>
);

const Coursesdata = () => (
  <div className="container">
    <h1>Soft Skill Courses</h1>
    <div className="section-container">
      {coursesData.map((section, index) => (
        <CourseSection
          key={index}
          category={section.category}
          courses={section.courses}
        />
      ))}
    </div>
  </div>
);

export default Coursesdata;
