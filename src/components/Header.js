import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="logo">
        <h1>💡 Growpreneur</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">About</a></li>
        </ul>
      </nav>
    </header>
    <br/>
    </>
  );
};

export default Header;
