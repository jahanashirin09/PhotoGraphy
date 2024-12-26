import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Gallery = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Define the mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Attach the event listener when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // GSAP animation triggered when mouse position changes
  useEffect(() => {
    gsap.to(".imgBox", {
      x: mousePosition.x,
      y: mousePosition.y,
      stagger: -0.1,
    });
  }, [mousePosition]); // Runs every time the mouse position changes

  return (
    <div className="container">
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery Image 1" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery Image 2" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery Image 3" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery Image 4" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery Image 5" />
      </div>
    </div>
  );
};

export default Gallery;
