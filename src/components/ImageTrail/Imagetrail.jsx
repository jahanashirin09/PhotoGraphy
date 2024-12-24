import { useEffect } from "react";
import "./Imagetrail.css";
import gsap from "gsap";

const Gallery = () => {
  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      gsap.to(".imgBox", {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.01,
      });
    };

    // Add the event listener
    // eslint-disable-next-line no-undef
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      // eslint-disable-next-line no-undef
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery 1" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery 2" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery 3" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery 4" />
      </div>
      <div className="imgBox">
        <img src="/Galleryimage/Gallery_1.jpg" alt="Gallery 5" />
      </div>
    </div>
  );
};

export default Gallery;
