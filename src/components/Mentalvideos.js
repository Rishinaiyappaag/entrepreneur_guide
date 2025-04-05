import React from "react";
import "./YouTubeGallery.css";


const videoLinks = [
  "https://youtu.be/nCrjevx3-Js?si=h5jmOKXVrfJFsf6E",
  "https://youtu.be/xRxT9cOKiM8?si=QjpNXg2gr8rxBMxz",
  "https://youtu.be/ztTexqGQ0VI?si=OQ8bC5oAzMLJerfG",
  "https://youtu.be/sfSDQRdIvTc?si=xK1G_8FkjVjt5",
];

// Function to convert YouTube links to embed links
const convertToEmbed = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1]?.split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

const Mentalvideos = () => (
  <div className="gallery-container">
    <h1 className="gallery-title">YouTube Video Gallery</h1>
    <div className="video-grid">
      {videoLinks.map((link, index) => (
        <div className="video-container" key={index}>
          <iframe
            src={convertToEmbed(link)}
            title={`YouTube Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>
);

export default Mentalvideos;
