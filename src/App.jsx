import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect/connect";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home";
import ImageMove from "./components/ImageTrail/ImageMove";
// import Imagetrail from "./components/ImageTrail/imagetrail";
import Myworks from "./components/MyWork/Myworks";




function App() {
  return (
    <>
      <div className="div-z-index">
        <Home />
        <About />
        <Myworks />
        <Explore />
      </div>

      <ImageMove />
      <div className="div-z-index">
        <Connect />
       
      </div>
      {/* <Imagetrail/> */}
    </>
  );
}
export default App;
