import "./image_effect.css";
import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

const Hero = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [count, setCount] = useState(0);
  const heroRef = useRef(null);
  // const heroTitleRef = useRef(null);

  const images = [
    "./media/1.jpg",
    "./media/2.jpg",
    "./media/3.jpg",
    "./media/4.jpg",
  ];

  // const preloadImages = () => {
  //   images.forEach((image) => {
  //     let link = document.createElement("link");
  //     link.rel = "preload";
  //     link.as = "image";
  //     link.href = image;
  //     document.head.appendChild(link);
  //   });
  // };

  const calcIndex = (length) => {
    let newCount = count + 1;
    if (newCount === length) newCount = 0;
    setCount(newCount);
    return newCount;
  };

  const animateImages = (event) => {
    const image = document.createElement("img");
    const imageSize = 20;
    // const imageRadius=10
    const countIndex = calcIndex(images.length);
    image.classList.add("hero_media");
    image.setAttribute("src", images[countIndex]);
    image.style.width = `${imageSize}rem`;
    image.style.height = `${imageSize}rem`;
    image.style.top = `${event.pageY - (imageSize * 10) / 2}px`;
    image.style.left = `${event.pageX - (imageSize * 10) / 2}px`;
    // image.style.borderRadius = `${imageRadius}rem`;

    heroRef.current.appendChild(image);

    // const randomDeg = Math.floor(Math.random() * 15);
    setTimeout(() => {
      image.style.opacity = 0;
      image.style.filter = "blur(10px)";
      image.style.transform = "scale(0.25)";
    }, 800);

    setTimeout(() => {
      heroRef.current.removeChild(image);
    }, 2000);
  };

  const handleMouseMove = (event) => {

    const maxWidth = 1440;
    if (!isEnabled && event.pageX <= maxWidth) {
      setIsEnabled(true);
      setTimeout(() => {
        setIsEnabled(false);
      }, 50);
      animateImages(event);
    }
  };

//   const initHero = () => {
//     gsap.set(heroTitleRef.current, { x: "-101%" });
//     gsap.to(heroTitleRef.current, {
//       duration: 1.75,
//       x: 0,
//       ease: "expo.inOut",
//       stagger: 0.025,
//     });
//   };

  useEffect(() => {
    // preloadImages();
    // initHero();

    const appElement = heroRef.current;
    appElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      appElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isEnabled, count]);

  return (
    <div ref={heroRef} className="app">
      <section className="hero">
        <div className="title-container">
          <span className="title-text">BEAUTY OF LIFE  CAPTURED</span>
        </div>
        {/* <div className="hero_wrapper">
          <div className="hero_gallery"></div>
          <div ref={heroTitleRef} className="hero_title">
            <div className="ofh">
              <h1>T</h1>
            </div>
            <div className="ofh">
              <h1>R</h1>
            </div>
            <div className="ofh">
              <h1>A</h1>
            </div>
            <div className="ofh">
              <h1>I</h1>
            </div>
            <div className="ofh">
              <h1>L</h1>
            </div>
            <div className="ofh">
              <h1>I</h1>
            </div>
            <div className="ofh">
              <h1>N</h1>
            </div>
            <div className="ofh">
              <h1>G</h1>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;

