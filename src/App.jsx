import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect/connect";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home";
// import Imagetrail from "./components/ImageTrail/imagetrail";
import Myworks from "./components/MyWork/Myworks";




function App() {
  return (
    <>
      <Home />
      <About />
      <Myworks />
      <Explore />
      {/* <Imagetrail/> */}
      <Connect />
    </>
  );
}
export default App;
