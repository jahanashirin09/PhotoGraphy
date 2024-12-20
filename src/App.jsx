import "./App.css";
import About from "./components/About";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home";
import Myworks from "./components/MyWork/Myworks";

function App() {
  return (
    <>
      <Home />
      <About />
      <Myworks />
      <Explore/>
    </>
  );
}
export default App;
