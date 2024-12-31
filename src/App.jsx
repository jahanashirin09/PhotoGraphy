import "./App.css";
import About from "./components/About/About";
import Connect from "./components/Connect/connect";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home";
// import ImageMove from "./components/ImageTrail/ImageMove";
// import Imagetrail from "./components/ImageTrail/imagetrail";
import Myworks from "./components/MyWork/Myworks";
// import TrailingEffect from "./image_effect/image_effect";
import Hero from "./components/image_effect/image_effect";




function App() {
  return (
    <>
     
        <Home />
        <About />
        <Myworks />
        <Explore />
        <Hero />
        <Connect />
    </>
  );
}
export default App;
